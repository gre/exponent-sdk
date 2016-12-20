const fs = require("fs");
const WebIDL2 = require("webidl2");

const uniq = arr => Array.from(new Set(arr));

const idWrapperClass = {
  genClassBody: () => `
  _id: number;
  constructor (id: number) {
    this._id = id;
  }
`,
  unwrap: (name) => `${name}._id`,
};

const objWrapperClass = {
  // TODO generate the exact flow shape.
  genClassBody: node => `
${node.members
  .map(n => `  ${n.name}: ${toFlowType(n.idlType)};`)
  .join("\n")}
  constructor (obj: {| ${node.members
    .map(n => n.name+": "+toFlowType(n.idlType))
    .join(", ")} |}) {
    Object.assign(this, obj);
  }
`,
  unwrap: name => name, // the class instance is preserved because it assigned all the obj fields.
};

const classesExportWhitelist = {
  WebGLRenderingContext: {},
  WebGLObject: idWrapperClass,
  WebGLBuffer: idWrapperClass,
  WebGLFramebuffer: idWrapperClass,
  WebGLProgram: idWrapperClass,
  WebGLRenderbuffer: idWrapperClass,
  WebGLShader: idWrapperClass,
  WebGLTexture: idWrapperClass,
  WebGLUniformLocation: idWrapperClass,
  WebGLActiveInfo: objWrapperClass,
  WebGLShaderPrecisionFormat: objWrapperClass,
};

const instanceofWhitelist = {
  Float32Array: true,
  Int32Array: true,
  ArrayBuffer: true,
  ArrayBufferView: true,
};

const typeOfNumbers = {
  GLsizeiptr: true,
  GLfloat: true,
  GLint: true,
};

const wrapNullable = (idlType, name, code) =>
  idlType.nullable
  ? `${name}===null ? null : ${code}`
  : code;

const unwrapArg = (name, idlType) => {
  if (idlType.sequence) {
    const type = idlType.idlType.idlType;
    // need sequence -> TypedArray conversion
    if (type === "GLfloat") {
      return `new Float32Array(${name})`;
    }
    else if (type === "GLint" || type === "long") {
      return `new Int32Array(${name})`;
    }
  }
  const cls = classesExportWhitelist[idlType.idlType];
  return (
    cls ?
    wrapNullable(idlType, name, cls.unwrap(name))
    : name
  );
};

const FlowtypeAlias = {
  GLenum: "number",
  GLboolean: "boolean",
  GLbitfield: "number",
  GLbyte: "number",
  GLshort: "number",
  GLint: "number",
  GLsizei: "number",
  GLintptr: "number",
  GLsizeiptr: "number",
  GLubyte: "number",
  GLushort: "number",
  GLuint: "number",
  GLfloat: "number",
  GLclampf: "number",
  long: "number",
  DOMString: "string",
  object: "Object",
};
const toFlowType = (idlType) => {
  let type;
  if (idlType.sequence) {
    type = idlType.idlType;
    type = `Array<${toFlowType(type)}>`;
  }
  else {
    type = idlType.idlType;
    if (type in FlowtypeAlias) {
      type = FlowtypeAlias[type];
    }
  }
  return (idlType.nullable ? "?" : "") + type;
};

const wrapRes = (name, idlType) => {
  const type = idlType.idlType;
  const cls = classesExportWhitelist[type];
  return (
    cls ?
    wrapNullable(idlType, name, `new ${type}(${name})`)
    : name
  );
};

const validateArg = (methodName, index, argName, idlType) => {
  const type = idlType.idlType;
  const cls = classesExportWhitelist[type];
  if (cls) {
    return `if (${argName}!==null && !(${argName} instanceof ${type})) throw new TypeError("Failed to execute '${methodName}' on 'WebGLRenderingContext': parameter ${index+1} is not of type '${type}'.");`;
  }
  return "";
};

const condForType = (name, idlType) => {
  const type = idlType.idlType;
  if (idlType.sequence) {
    return `${name} instanceof Array`;
  }
  else {
    if (type in classesExportWhitelist || type in instanceofWhitelist) {
      return `${name} instanceof ${type}`;
    }
    if (type in typeOfNumbers) {
      return `typeof ${name} === "number"`;
    }
  }
  console.error(name, idlType);
  throw new Error("unsupported case in condForType. "+ name+" type="+type);
};

fs.readFile("webgl.idl", "utf8", (err, data) => {
  if (err) throw err;
  const tree = WebIDL2.parse(data);

  const classes = [];
  const glMethodsByName = {};
  tree.forEach(node => {
    if (node.type === "interface" && node.name in classesExportWhitelist) {
      classes.push(node);
    }
    else if (node.type === "interface" && node.name==="WebGLRenderingContextBase") {
      node.members.forEach(node => {
        if (node.type === "operation" && !node.static) {
          glMethodsByName[node.name] = (glMethodsByName[node.name]||[]).concat(node);
        }
      });
    }
  });

  const glMethodCodes = Object.keys(glMethodsByName).map(name => {
    let code = `${name} `;
    const nodes = glMethodsByName[name];
    if (name.indexOf("is")===0 && nodes[0].arguments.length===1 && nodes[0].arguments[0].idlType.idlType in classesExportWhitelist) {
      // is* methods are handled on JS side.
      const node = nodes[0];
      const arg = node.arguments[0];
      code += `(${arg.name}) { return ${arg.name} instanceof ${arg.idlType.idlType}; }`;
    }
    else {
      const arities = uniq(nodes.map(n => n.arguments.length)).sort((a, b) => a-b);
      let argNames;
      const returnIdlType = nodes[0].idlType;
      if (nodes.length>1) {
        const maxArity = Math.max.apply(Math, arities);
        argNames = [];
        for (let i=0; i<maxArity; i++) {
          argNames.push("arg"+i);
        }
      }
      else {
        argNames = nodes[0].arguments.map(arg => arg.name);
      }

      // TODO if there is more than one node we should do smart things.
      // TODO in case of a sequence<> we need to convert to a *32Array

      const returnsVoid = returnIdlType.idlType==="void";
      const multipleNodes = nodes.length > 1;

      // generate gl call code: validates / execute / wrap & return value
      code += `(${argNames.join(", ")}) {\n`;

      // in case there are multiple signature, we will guess the signature at runtime
      if (multipleNodes) {
        code += `    let signature;\n`;
        const nodesByArities = new Map();
        nodes.forEach(node => {
          const arity = node.arguments.length;
          nodesByArities.set(arity, (nodesByArities.get(arity)||[]).concat(node));
        });
        // start switching by arity
        code += `    switch (arguments.length) {\n`;
        nodesByArities.forEach((arityNodes, arity) => {
          code += `    case ${arity}:\n`;
          if (arityNodes.length===1) {
            code += `      signature = ${nodes.indexOf(arityNodes[0])};\n`;
          }
          else { // more complex case, we need to guess by argument type
            const uniqByType = [];
            for (let i = 0; i < arity; i++) {
              const arr = [];
              for (let j = 0; j < arityNodes.length; j++) {
                const node = arityNodes[j];
                const arg = node.arguments[i];
                let exists = false;
                for (let k = 0; k < arr.length; k++) {
                  const existingArg = arr[k].arguments[i];
                  if (existingArg.idlType.idlType === arg.idlType.idlType) {
                    exists = true;
                    break;
                  }
                }
                if (!exists) {
                  arr.push(node);
                }
              }
              uniqByType.push(arr);
            }

            // in our cases, the first arg that differ is ok to "select" the signature. in more advanced case, we could have more than one...
            const argWithDiffNodes = uniqByType.find(argNodes => argNodes.length > 1);
            const argIndex = uniqByType.indexOf(argWithDiffNodes);
            const argName = argNames[argIndex];
            argWithDiffNodes.forEach((node, i) => {
              const signature = nodes.indexOf(node);
              const argType = node.arguments[argIndex].idlType;
              code += `      ${i===0 ? "if": "else if"} (${condForType(argName, argType)})\n`
              code += `        signature = ${signature};\n`;
            });
          }
          code += `      break;\n`;
        });
        code += `    }\n`;
      }

      // the generated validation error messages are ~ consistent with WebGL implementation (tested on Chrome)
      if (arities.length===1) {
        const arity = arities[0];
        if (arity > 0) {
          code += `    if (arguments.length<${arity}) throw new TypeError("Failed to execute '${name}' on 'WebGLRenderingContext': ${arity} arguments required, but only "+arguments.length+" present.");\n`;
        }
      }
      else {
        code += `    if ([${arities.join(", ")}].indexOf(arguments.length)===-1) throw new TypeError("Failed to execute '${name}' on 'WebGLRenderingContext': Valid arities are : [${arities.join(", ")}], but "+arguments.length+" provided.");\n`;
        // TODO in chrome: TypeError: Failed to execute 'texImage2D' on 'WebGLRenderingContext': Valid arities are: [6, 9], but 7 arguments provided.
      }

      if (multipleNodes) {
        code += "    switch (signature) {\n";
      }
      nodes.forEach((node, i) => {
        if (multipleNodes) code += `    case ${i}:\n`;
        const validations = // FIXME we can factorize if the args are identical..
          node.arguments.map((arg, i) =>
            validateArg(name, i, argNames[i], arg.idlType)
          ).filter(str => str);
        if (validations.length) {
          code += validations.map(str => "    "+str).join("\n")+"\n";
        }

        code += `    ${
          returnsVoid
          ? "" :
          "const res = "
        }gl.${name}(${node.arguments.map((arg, i) =>
         unwrapArg(argNames[i], arg.idlType)
       ).join(", ")});\n`;

        // generate returns code.
        if (!returnsVoid) {
          code += `    return ${wrapRes("res", returnIdlType)};\n`;
        }
        else {
          if (multipleNodes) {
            code += `    break;\n`;
          }
        }
      });
      if (multipleNodes) {
        code += "   }\n";
      }
      code += "  }";
    }
    return code;
  });

  console.log("//@flow");
  console.log("/* eslint-disable */");

  // fake ArrayBufferView class
  // FIXME it doesn't exist right?
  console.log("class ArrayBufferView {}");

  // generate classes
  console.log(classes.map(node => {
    const cls = classesExportWhitelist[node.name];
    const inherit = node.inheritance;
    return `class ${node.name}${inherit ? " extends "+inherit : ""} {${
        inherit || !cls.genClassBody
        ? "" // if we inherits, it means we already have the body (in our GL cases)
        : " " + cls.genClassBody(node) + " "
      }}`;
  }).join("\n")+"\n");

  // export classes to global
  console.log(classes.map(node => {
    return `global.${node.name} = ${node.name};`;
  }).join("\n")+"\n");

  // generate Context flow type
  // TODO: we should generate Context directly in the WebGLRenderingContext class. that way we can also gen the statics.
  console.log(`
type TexImageSource = any; // FIXME: to be defined.
type WebGLContextAttributes = void; // not supported yet
type BufferDataSource = ArrayBuffer | ArrayBufferView;
type VertexAttribFVSource = Float32Array | Array<number>;
type Context = {
${Object.keys(glMethodsByName).map(name => {
  return glMethodsByName[name].map(node =>
    `  ${name}: (${node.arguments.map(arg => arg.name+": "+toFlowType(arg.idlType)).join(", ")}) => ${toFlowType(node.idlType)};`
  ).join("\n");
}).join("\n")}
}
  `);

  // generate makeGL function
  // TODO: instead of setPrototypeOf, we should probably `new WebGLRenderingContext()`
  console.log(`export default (gl: any): Context => {
  const context: Context = {
    ...gl,
${glMethodCodes.map(code => "  "+code).join(",\n")}
  };
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(context, global.WebGLRenderingContext.prototype);
  } else {
    // $FlowFixMe
    context.__proto__ = global.WebGLRenderingContext.prototype;
  }
  return context;
};`);
});
