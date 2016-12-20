//@flow
/* eslint-disable */
class ArrayBufferView {}
class WebGLObject {
  _id: number;
  constructor (id: number) {
    this._id = id;
  }
 }
class WebGLBuffer extends WebGLObject {}
class WebGLFramebuffer extends WebGLObject {}
class WebGLProgram extends WebGLObject {}
class WebGLRenderbuffer extends WebGLObject {}
class WebGLShader extends WebGLObject {}
class WebGLTexture extends WebGLObject {}
class WebGLUniformLocation {
  _id: number;
  constructor (id: number) {
    this._id = id;
  }
 }
class WebGLActiveInfo {
  size: number;
  type: number;
  name: string;
  constructor (obj: {| size: number, type: number, name: string |}) {
    Object.assign(this, obj);
  }
 }
class WebGLShaderPrecisionFormat {
  rangeMin: number;
  rangeMax: number;
  precision: number;
  constructor (obj: {| rangeMin: number, rangeMax: number, precision: number |}) {
    Object.assign(this, obj);
  }
 }
class WebGLRenderingContext {}

global.WebGLObject = WebGLObject;
global.WebGLBuffer = WebGLBuffer;
global.WebGLFramebuffer = WebGLFramebuffer;
global.WebGLProgram = WebGLProgram;
global.WebGLRenderbuffer = WebGLRenderbuffer;
global.WebGLShader = WebGLShader;
global.WebGLTexture = WebGLTexture;
global.WebGLUniformLocation = WebGLUniformLocation;
global.WebGLActiveInfo = WebGLActiveInfo;
global.WebGLShaderPrecisionFormat = WebGLShaderPrecisionFormat;
global.WebGLRenderingContext = WebGLRenderingContext;


type TexImageSource = any; // FIXME: to be defined.
type WebGLContextAttributes = void; // not supported yet
type BufferDataSource = ArrayBuffer | ArrayBufferView;
type VertexAttribFVSource = Float32Array | Array<number>;
type Context = {
  getContextAttributes: () => ?WebGLContextAttributes;
  isContextLost: () => boolean;
  getSupportedExtensions: () => ?Array<string>;
  getExtension: (name: string) => ?Object;
  activeTexture: (texture: number) => void;
  attachShader: (program: WebGLProgram, shader: WebGLShader) => void;
  bindAttribLocation: (program: WebGLProgram, index: number, name: string) => void;
  bindBuffer: (target: number, buffer: ?WebGLBuffer) => void;
  bindFramebuffer: (target: number, framebuffer: ?WebGLFramebuffer) => void;
  bindRenderbuffer: (target: number, renderbuffer: ?WebGLRenderbuffer) => void;
  bindTexture: (target: number, texture: ?WebGLTexture) => void;
  blendColor: (red: number, green: number, blue: number, alpha: number) => void;
  blendEquation: (mode: number) => void;
  blendEquationSeparate: (modeRGB: number, modeAlpha: number) => void;
  blendFunc: (sfactor: number, dfactor: number) => void;
  blendFuncSeparate: (srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number) => void;
  bufferData: (target: number, size: number, usage: number) => void;
  bufferData: (target: number, data: ?ArrayBuffer, usage: number) => void;
  bufferData: (target: number, data: ArrayBufferView, usage: number) => void;
  bufferSubData: (target: number, offset: number, data: BufferDataSource) => void;
  checkFramebufferStatus: (target: number) => number;
  clear: (mask: number) => void;
  clearColor: (red: number, green: number, blue: number, alpha: number) => void;
  clearDepth: (depth: number) => void;
  clearStencil: (s: number) => void;
  colorMask: (red: boolean, green: boolean, blue: boolean, alpha: boolean) => void;
  compileShader: (shader: WebGLShader) => void;
  compressedTexImage2D: (target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView) => void;
  compressedTexSubImage2D: (target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView) => void;
  copyTexImage2D: (target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number) => void;
  copyTexSubImage2D: (target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number) => void;
  createBuffer: () => ?WebGLBuffer;
  createFramebuffer: () => ?WebGLFramebuffer;
  createProgram: () => ?WebGLProgram;
  createRenderbuffer: () => ?WebGLRenderbuffer;
  createShader: (type: number) => ?WebGLShader;
  createTexture: () => ?WebGLTexture;
  cullFace: (mode: number) => void;
  deleteBuffer: (buffer: ?WebGLBuffer) => void;
  deleteFramebuffer: (framebuffer: ?WebGLFramebuffer) => void;
  deleteProgram: (program: ?WebGLProgram) => void;
  deleteRenderbuffer: (renderbuffer: ?WebGLRenderbuffer) => void;
  deleteShader: (shader: ?WebGLShader) => void;
  deleteTexture: (texture: ?WebGLTexture) => void;
  depthFunc: (func: number) => void;
  depthMask: (flag: boolean) => void;
  depthRange: (zNear: number, zFar: number) => void;
  detachShader: (program: WebGLProgram, shader: WebGLShader) => void;
  disable: (cap: number) => void;
  disableVertexAttribArray: (index: number) => void;
  drawArrays: (mode: number, first: number, count: number) => void;
  drawElements: (mode: number, count: number, type: number, offset: number) => void;
  enable: (cap: number) => void;
  enableVertexAttribArray: (index: number) => void;
  finish: () => void;
  flush: () => void;
  framebufferRenderbuffer: (target: number, attachment: number, renderbuffertarget: number, renderbuffer: ?WebGLRenderbuffer) => void;
  framebufferTexture2D: (target: number, attachment: number, textarget: number, texture: ?WebGLTexture, level: number) => void;
  frontFace: (mode: number) => void;
  generateMipmap: (target: number) => void;
  getActiveAttrib: (program: WebGLProgram, index: number) => ?WebGLActiveInfo;
  getActiveUniform: (program: WebGLProgram, index: number) => ?WebGLActiveInfo;
  getAttachedShaders: (program: WebGLProgram) => ?Array<WebGLShader>;
  getAttribLocation: (program: WebGLProgram, name: string) => number;
  getBufferParameter: (target: number, pname: number) => any;
  getParameter: (pname: number) => any;
  getError: () => number;
  getFramebufferAttachmentParameter: (target: number, attachment: number, pname: number) => any;
  getProgramParameter: (program: WebGLProgram, pname: number) => any;
  getProgramInfoLog: (program: WebGLProgram) => ?string;
  getRenderbufferParameter: (target: number, pname: number) => any;
  getShaderParameter: (shader: WebGLShader, pname: number) => any;
  getShaderPrecisionFormat: (shadertype: number, precisiontype: number) => ?WebGLShaderPrecisionFormat;
  getShaderInfoLog: (shader: WebGLShader) => ?string;
  getShaderSource: (shader: WebGLShader) => ?string;
  getTexParameter: (target: number, pname: number) => any;
  getUniform: (program: WebGLProgram, location: WebGLUniformLocation) => any;
  getUniformLocation: (program: WebGLProgram, name: string) => ?WebGLUniformLocation;
  getVertexAttrib: (index: number, pname: number) => any;
  getVertexAttribOffset: (index: number, pname: number) => number;
  hint: (target: number, mode: number) => void;
  isBuffer: (buffer: ?WebGLBuffer) => boolean;
  isEnabled: (cap: number) => boolean;
  isFramebuffer: (framebuffer: ?WebGLFramebuffer) => boolean;
  isProgram: (program: ?WebGLProgram) => boolean;
  isRenderbuffer: (renderbuffer: ?WebGLRenderbuffer) => boolean;
  isShader: (shader: ?WebGLShader) => boolean;
  isTexture: (texture: ?WebGLTexture) => boolean;
  lineWidth: (width: number) => void;
  linkProgram: (program: WebGLProgram) => void;
  pixelStorei: (pname: number, param: number) => void;
  polygonOffset: (factor: number, units: number) => void;
  readPixels: (x: number, y: number, width: number, height: number, format: number, type: number, pixels: ?ArrayBufferView) => void;
  renderbufferStorage: (target: number, internalformat: number, width: number, height: number) => void;
  sampleCoverage: (value: number, invert: boolean) => void;
  scissor: (x: number, y: number, width: number, height: number) => void;
  shaderSource: (shader: WebGLShader, source: string) => void;
  stencilFunc: (func: number, ref: number, mask: number) => void;
  stencilFuncSeparate: (face: number, func: number, ref: number, mask: number) => void;
  stencilMask: (mask: number) => void;
  stencilMaskSeparate: (face: number, mask: number) => void;
  stencilOp: (fail: number, zfail: number, zpass: number) => void;
  stencilOpSeparate: (face: number, fail: number, zfail: number, zpass: number) => void;
  texImage2D: (target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ?ArrayBufferView) => void;
  texImage2D: (target: number, level: number, internalformat: number, format: number, type: number, source: TexImageSource) => void;
  texParameterf: (target: number, pname: number, param: number) => void;
  texParameteri: (target: number, pname: number, param: number) => void;
  texSubImage2D: (target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ?ArrayBufferView) => void;
  texSubImage2D: (target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, source: TexImageSource) => void;
  uniform1f: (location: ?WebGLUniformLocation, x: number) => void;
  uniform1fv: (location: ?WebGLUniformLocation, v: Float32Array) => void;
  uniform1fv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform1i: (location: ?WebGLUniformLocation, x: number) => void;
  uniform1iv: (location: ?WebGLUniformLocation, v: Int32Array) => void;
  uniform1iv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform2f: (location: ?WebGLUniformLocation, x: number, y: number) => void;
  uniform2fv: (location: ?WebGLUniformLocation, v: Float32Array) => void;
  uniform2fv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform2i: (location: ?WebGLUniformLocation, x: number, y: number) => void;
  uniform2iv: (location: ?WebGLUniformLocation, v: Int32Array) => void;
  uniform2iv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform3f: (location: ?WebGLUniformLocation, x: number, y: number, z: number) => void;
  uniform3fv: (location: ?WebGLUniformLocation, v: Float32Array) => void;
  uniform3fv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform3i: (location: ?WebGLUniformLocation, x: number, y: number, z: number) => void;
  uniform3iv: (location: ?WebGLUniformLocation, v: Int32Array) => void;
  uniform3iv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform4f: (location: ?WebGLUniformLocation, x: number, y: number, z: number, w: number) => void;
  uniform4fv: (location: ?WebGLUniformLocation, v: Float32Array) => void;
  uniform4fv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniform4i: (location: ?WebGLUniformLocation, x: number, y: number, z: number, w: number) => void;
  uniform4iv: (location: ?WebGLUniformLocation, v: Int32Array) => void;
  uniform4iv: (location: ?WebGLUniformLocation, v: Array<number>) => void;
  uniformMatrix2fv: (location: ?WebGLUniformLocation, transpose: boolean, value: Float32Array) => void;
  uniformMatrix2fv: (location: ?WebGLUniformLocation, transpose: boolean, value: Array<number>) => void;
  uniformMatrix3fv: (location: ?WebGLUniformLocation, transpose: boolean, value: Float32Array) => void;
  uniformMatrix3fv: (location: ?WebGLUniformLocation, transpose: boolean, value: Array<number>) => void;
  uniformMatrix4fv: (location: ?WebGLUniformLocation, transpose: boolean, value: Float32Array) => void;
  uniformMatrix4fv: (location: ?WebGLUniformLocation, transpose: boolean, value: Array<number>) => void;
  useProgram: (program: ?WebGLProgram) => void;
  validateProgram: (program: WebGLProgram) => void;
  vertexAttrib1f: (index: number, x: number) => void;
  vertexAttrib1fv: (index: number, values: VertexAttribFVSource) => void;
  vertexAttrib2f: (index: number, x: number, y: number) => void;
  vertexAttrib2fv: (index: number, values: VertexAttribFVSource) => void;
  vertexAttrib3f: (index: number, x: number, y: number, z: number) => void;
  vertexAttrib3fv: (index: number, values: VertexAttribFVSource) => void;
  vertexAttrib4f: (index: number, x: number, y: number, z: number, w: number) => void;
  vertexAttrib4fv: (index: number, values: VertexAttribFVSource) => void;
  vertexAttribPointer: (index: number, size: number, type: number, normalized: boolean, stride: number, offset: number) => void;
  viewport: (x: number, y: number, width: number, height: number) => void;
}

export default (gl: any): Context => {
  const context: Context = Object.assign({}, gl, {
  getContextAttributes () {
    const res = gl.getContextAttributes();
    return res;
  },
  isContextLost () {
    const res = gl.isContextLost();
    return res;
  },
  getSupportedExtensions () {
    const res = gl.getSupportedExtensions();
    return res;
  },
  getExtension (name) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'getExtension' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    const res = gl.getExtension(name);
    return res;
  },
  activeTexture (texture) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'activeTexture' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.activeTexture(texture);
  },
  attachShader (program, shader) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'attachShader' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'attachShader' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'attachShader' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLShader'.");
    gl.attachShader(program._id, shader._id);
  },
  bindAttribLocation (program, index, name) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'bindAttribLocation' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'bindAttribLocation' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    gl.bindAttribLocation(program._id, index, name);
  },
  bindBuffer (target, buffer) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'bindBuffer' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (buffer!==null && !(buffer instanceof WebGLBuffer)) throw new TypeError("Failed to execute 'bindBuffer' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLBuffer'.");
    gl.bindBuffer(target, buffer===null ? null : buffer._id);
  },
  bindFramebuffer (target, framebuffer) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'bindFramebuffer' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (framebuffer!==null && !(framebuffer instanceof WebGLFramebuffer)) throw new TypeError("Failed to execute 'bindFramebuffer' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLFramebuffer'.");
    gl.bindFramebuffer(target, framebuffer===null ? null : framebuffer._id);
  },
  bindRenderbuffer (target, renderbuffer) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'bindRenderbuffer' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (renderbuffer!==null && !(renderbuffer instanceof WebGLRenderbuffer)) throw new TypeError("Failed to execute 'bindRenderbuffer' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLRenderbuffer'.");
    gl.bindRenderbuffer(target, renderbuffer===null ? null : renderbuffer._id);
  },
  bindTexture (target, texture) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'bindTexture' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (texture!==null && !(texture instanceof WebGLTexture)) throw new TypeError("Failed to execute 'bindTexture' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLTexture'.");
    gl.bindTexture(target, texture===null ? null : texture._id);
  },
  blendColor (red, green, blue, alpha) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'blendColor' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.blendColor(red, green, blue, alpha);
  },
  blendEquation (mode) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'blendEquation' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.blendEquation(mode);
  },
  blendEquationSeparate (modeRGB, modeAlpha) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'blendEquationSeparate' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.blendEquationSeparate(modeRGB, modeAlpha);
  },
  blendFunc (sfactor, dfactor) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'blendFunc' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.blendFunc(sfactor, dfactor);
  },
  blendFuncSeparate (srcRGB, dstRGB, srcAlpha, dstAlpha) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'blendFuncSeparate' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
  },
  bufferData (arg0, arg1, arg2) {
    let signature;
    switch (arguments.length) {
    case 3:
      if (typeof arg1 === "number")
        signature = 0;
      else if (arg1 instanceof ArrayBuffer)
        signature = 1;
      else if (arg1 instanceof ArrayBufferView)
        signature = 2;
      break;
    }
    if (arguments.length<3) throw new TypeError("Failed to execute 'bufferData' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    gl.bufferData(arg0, arg1, arg2);
    break;
    case 1:
    gl.bufferData(arg0, arg1, arg2);
    break;
    case 2:
    gl.bufferData(arg0, arg1, arg2);
    break;
   }
  },
  bufferSubData (target, offset, data) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'bufferSubData' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.bufferSubData(target, offset, data);
  },
  checkFramebufferStatus (target) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'checkFramebufferStatus' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    const res = gl.checkFramebufferStatus(target);
    return res;
  },
  clear (mask) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'clear' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.clear(mask);
  },
  clearColor (red, green, blue, alpha) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'clearColor' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.clearColor(red, green, blue, alpha);
  },
  clearDepth (depth) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'clearDepth' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.clearDepth(depth);
  },
  clearStencil (s) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'clearStencil' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.clearStencil(s);
  },
  colorMask (red, green, blue, alpha) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'colorMask' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.colorMask(red, green, blue, alpha);
  },
  compileShader (shader) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'compileShader' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'compileShader' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLShader'.");
    gl.compileShader(shader._id);
  },
  compressedTexImage2D (target, level, internalformat, width, height, border, data) {
    if (arguments.length<7) throw new TypeError("Failed to execute 'compressedTexImage2D' on 'WebGLRenderingContext': 7 arguments required, but only "+arguments.length+" present.");
    gl.compressedTexImage2D(target, level, internalformat, width, height, border, data);
  },
  compressedTexSubImage2D (target, level, xoffset, yoffset, width, height, format, data) {
    if (arguments.length<8) throw new TypeError("Failed to execute 'compressedTexSubImage2D' on 'WebGLRenderingContext': 8 arguments required, but only "+arguments.length+" present.");
    gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data);
  },
  copyTexImage2D (target, level, internalformat, x, y, width, height, border) {
    if (arguments.length<8) throw new TypeError("Failed to execute 'copyTexImage2D' on 'WebGLRenderingContext': 8 arguments required, but only "+arguments.length+" present.");
    gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
  },
  copyTexSubImage2D (target, level, xoffset, yoffset, x, y, width, height) {
    if (arguments.length<8) throw new TypeError("Failed to execute 'copyTexSubImage2D' on 'WebGLRenderingContext': 8 arguments required, but only "+arguments.length+" present.");
    gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
  },
  createBuffer () {
    const res = gl.createBuffer();
    return res===null ? null : new WebGLBuffer(res);
  },
  createFramebuffer () {
    const res = gl.createFramebuffer();
    return res===null ? null : new WebGLFramebuffer(res);
  },
  createProgram () {
    const res = gl.createProgram();
    return res===null ? null : new WebGLProgram(res);
  },
  createRenderbuffer () {
    const res = gl.createRenderbuffer();
    return res===null ? null : new WebGLRenderbuffer(res);
  },
  createShader (type) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'createShader' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    const res = gl.createShader(type);
    return res===null ? null : new WebGLShader(res);
  },
  createTexture () {
    const res = gl.createTexture();
    return res===null ? null : new WebGLTexture(res);
  },
  cullFace (mode) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'cullFace' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.cullFace(mode);
  },
  deleteBuffer (buffer) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'deleteBuffer' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (buffer!==null && !(buffer instanceof WebGLBuffer)) throw new TypeError("Failed to execute 'deleteBuffer' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLBuffer'.");
    gl.deleteBuffer(buffer===null ? null : buffer._id);
  },
  deleteFramebuffer (framebuffer) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'deleteFramebuffer' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (framebuffer!==null && !(framebuffer instanceof WebGLFramebuffer)) throw new TypeError("Failed to execute 'deleteFramebuffer' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLFramebuffer'.");
    gl.deleteFramebuffer(framebuffer===null ? null : framebuffer._id);
  },
  deleteProgram (program) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'deleteProgram' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'deleteProgram' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    gl.deleteProgram(program===null ? null : program._id);
  },
  deleteRenderbuffer (renderbuffer) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'deleteRenderbuffer' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (renderbuffer!==null && !(renderbuffer instanceof WebGLRenderbuffer)) throw new TypeError("Failed to execute 'deleteRenderbuffer' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLRenderbuffer'.");
    gl.deleteRenderbuffer(renderbuffer===null ? null : renderbuffer._id);
  },
  deleteShader (shader) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'deleteShader' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'deleteShader' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLShader'.");
    gl.deleteShader(shader===null ? null : shader._id);
  },
  deleteTexture (texture) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'deleteTexture' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (texture!==null && !(texture instanceof WebGLTexture)) throw new TypeError("Failed to execute 'deleteTexture' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLTexture'.");
    gl.deleteTexture(texture===null ? null : texture._id);
  },
  depthFunc (func) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'depthFunc' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.depthFunc(func);
  },
  depthMask (flag) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'depthMask' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.depthMask(flag);
  },
  depthRange (zNear, zFar) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'depthRange' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.depthRange(zNear, zFar);
  },
  detachShader (program, shader) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'detachShader' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'detachShader' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'detachShader' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLShader'.");
    gl.detachShader(program._id, shader._id);
  },
  disable (cap) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'disable' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.disable(cap);
  },
  disableVertexAttribArray (index) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'disableVertexAttribArray' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.disableVertexAttribArray(index);
  },
  drawArrays (mode, first, count) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'drawArrays' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.drawArrays(mode, first, count);
  },
  drawElements (mode, count, type, offset) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'drawElements' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.drawElements(mode, count, type, offset);
  },
  enable (cap) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'enable' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.enable(cap);
  },
  enableVertexAttribArray (index) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'enableVertexAttribArray' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.enableVertexAttribArray(index);
  },
  finish () {
    gl.finish();
  },
  flush () {
    gl.flush();
  },
  framebufferRenderbuffer (target, attachment, renderbuffertarget, renderbuffer) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'framebufferRenderbuffer' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    if (renderbuffer!==null && !(renderbuffer instanceof WebGLRenderbuffer)) throw new TypeError("Failed to execute 'framebufferRenderbuffer' on 'WebGLRenderingContext': parameter 4 is not of type 'WebGLRenderbuffer'.");
    gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer===null ? null : renderbuffer._id);
  },
  framebufferTexture2D (target, attachment, textarget, texture, level) {
    if (arguments.length<5) throw new TypeError("Failed to execute 'framebufferTexture2D' on 'WebGLRenderingContext': 5 arguments required, but only "+arguments.length+" present.");
    if (texture!==null && !(texture instanceof WebGLTexture)) throw new TypeError("Failed to execute 'framebufferTexture2D' on 'WebGLRenderingContext': parameter 4 is not of type 'WebGLTexture'.");
    gl.framebufferTexture2D(target, attachment, textarget, texture===null ? null : texture._id, level);
  },
  frontFace (mode) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'frontFace' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.frontFace(mode);
  },
  generateMipmap (target) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'generateMipmap' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.generateMipmap(target);
  },
  getActiveAttrib (program, index) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getActiveAttrib' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getActiveAttrib' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getActiveAttrib(program._id, index);
    return res===null ? null : new WebGLActiveInfo(res);
  },
  getActiveUniform (program, index) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getActiveUniform' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getActiveUniform' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getActiveUniform(program._id, index);
    return res===null ? null : new WebGLActiveInfo(res);
  },
  getAttachedShaders (program) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'getAttachedShaders' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getAttachedShaders' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getAttachedShaders(program._id);
    return res;
  },
  getAttribLocation (program, name) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getAttribLocation' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getAttribLocation' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getAttribLocation(program._id, name);
    return res;
  },
  getBufferParameter (target, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getBufferParameter' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    const res = gl.getBufferParameter(target, pname);
    return res;
  },
  getParameter (pname) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'getParameter' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    const res = gl.getParameter(pname);
    return res;
  },
  getError () {
    const res = gl.getError();
    return res;
  },
  getFramebufferAttachmentParameter (target, attachment, pname) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'getFramebufferAttachmentParameter' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    const res = gl.getFramebufferAttachmentParameter(target, attachment, pname);
    return res;
  },
  getProgramParameter (program, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getProgramParameter' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getProgramParameter' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getProgramParameter(program._id, pname);
    return res;
  },
  getProgramInfoLog (program) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'getProgramInfoLog' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getProgramInfoLog' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getProgramInfoLog(program._id);
    return res;
  },
  getRenderbufferParameter (target, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getRenderbufferParameter' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    const res = gl.getRenderbufferParameter(target, pname);
    return res;
  },
  getShaderParameter (shader, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getShaderParameter' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'getShaderParameter' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLShader'.");
    const res = gl.getShaderParameter(shader._id, pname);
    return res;
  },
  getShaderPrecisionFormat (shadertype, precisiontype) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getShaderPrecisionFormat' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    const res = gl.getShaderPrecisionFormat(shadertype, precisiontype);
    return res===null ? null : new WebGLShaderPrecisionFormat(res);
  },
  getShaderInfoLog (shader) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'getShaderInfoLog' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'getShaderInfoLog' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLShader'.");
    const res = gl.getShaderInfoLog(shader._id);
    return res;
  },
  getShaderSource (shader) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'getShaderSource' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'getShaderSource' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLShader'.");
    const res = gl.getShaderSource(shader._id);
    return res;
  },
  getTexParameter (target, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getTexParameter' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    const res = gl.getTexParameter(target, pname);
    return res;
  },
  getUniform (program, location) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getUniform' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getUniform' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'getUniform' on 'WebGLRenderingContext': parameter 2 is not of type 'WebGLUniformLocation'.");
    const res = gl.getUniform(program._id, location._id);
    return res;
  },
  getUniformLocation (program, name) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getUniformLocation' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'getUniformLocation' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    const res = gl.getUniformLocation(program._id, name);
    return res===null ? null : new WebGLUniformLocation(res);
  },
  getVertexAttrib (index, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getVertexAttrib' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    const res = gl.getVertexAttrib(index, pname);
    return res;
  },
  getVertexAttribOffset (index, pname) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'getVertexAttribOffset' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    const res = gl.getVertexAttribOffset(index, pname);
    return res;
  },
  hint (target, mode) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'hint' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.hint(target, mode);
  },
  isBuffer (buffer) { return buffer instanceof WebGLBuffer; },
  isEnabled (cap) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'isEnabled' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    const res = gl.isEnabled(cap);
    return res;
  },
  isFramebuffer (framebuffer) { return framebuffer instanceof WebGLFramebuffer; },
  isProgram (program) { return program instanceof WebGLProgram; },
  isRenderbuffer (renderbuffer) { return renderbuffer instanceof WebGLRenderbuffer; },
  isShader (shader) { return shader instanceof WebGLShader; },
  isTexture (texture) { return texture instanceof WebGLTexture; },
  lineWidth (width) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'lineWidth' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.lineWidth(width);
  },
  linkProgram (program) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'linkProgram' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'linkProgram' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    gl.linkProgram(program._id);
  },
  pixelStorei (pname, param) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'pixelStorei' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.pixelStorei(pname, param);
  },
  polygonOffset (factor, units) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'polygonOffset' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.polygonOffset(factor, units);
  },
  readPixels (x, y, width, height, format, type, pixels) {
    if (arguments.length<7) throw new TypeError("Failed to execute 'readPixels' on 'WebGLRenderingContext': 7 arguments required, but only "+arguments.length+" present.");
    gl.readPixels(x, y, width, height, format, type, pixels);
  },
  renderbufferStorage (target, internalformat, width, height) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'renderbufferStorage' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.renderbufferStorage(target, internalformat, width, height);
  },
  sampleCoverage (value, invert) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'sampleCoverage' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.sampleCoverage(value, invert);
  },
  scissor (x, y, width, height) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'scissor' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.scissor(x, y, width, height);
  },
  shaderSource (shader, source) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'shaderSource' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (shader!==null && !(shader instanceof WebGLShader)) throw new TypeError("Failed to execute 'shaderSource' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLShader'.");
    gl.shaderSource(shader._id, source);
  },
  stencilFunc (func, ref, mask) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'stencilFunc' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.stencilFunc(func, ref, mask);
  },
  stencilFuncSeparate (face, func, ref, mask) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'stencilFuncSeparate' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.stencilFuncSeparate(face, func, ref, mask);
  },
  stencilMask (mask) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'stencilMask' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    gl.stencilMask(mask);
  },
  stencilMaskSeparate (face, mask) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'stencilMaskSeparate' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.stencilMaskSeparate(face, mask);
  },
  stencilOp (fail, zfail, zpass) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'stencilOp' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.stencilOp(fail, zfail, zpass);
  },
  stencilOpSeparate (face, fail, zfail, zpass) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'stencilOpSeparate' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.stencilOpSeparate(face, fail, zfail, zpass);
  },
  texImage2D (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    let signature;
    switch (arguments.length) {
    case 9:
      signature = 0;
      break;
    case 6:
      signature = 1;
      break;
    }
    if ([6, 9].indexOf(arguments.length)===-1) throw new TypeError("Failed to execute 'texImage2D' on 'WebGLRenderingContext': Valid arities are : [6, 9], but "+arguments.length+" provided.");
    switch (signature) {
    case 0:
    gl.texImage2D(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    break;
    case 1:
    gl.texImage2D(arg0, arg1, arg2, arg3, arg4, arg5);
    break;
   }
  },
  texParameterf (target, pname, param) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'texParameterf' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.texParameterf(target, pname, param);
  },
  texParameteri (target, pname, param) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'texParameteri' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.texParameteri(target, pname, param);
  },
  texSubImage2D (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    let signature;
    switch (arguments.length) {
    case 9:
      signature = 0;
      break;
    case 7:
      signature = 1;
      break;
    }
    if ([7, 9].indexOf(arguments.length)===-1) throw new TypeError("Failed to execute 'texSubImage2D' on 'WebGLRenderingContext': Valid arities are : [7, 9], but "+arguments.length+" provided.");
    switch (signature) {
    case 0:
    gl.texSubImage2D(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    break;
    case 1:
    gl.texSubImage2D(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    break;
   }
  },
  uniform1f (location, x) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform1f' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform1f' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform1f(location===null ? null : location._id, x);
  },
  uniform1fv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Float32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform1fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform1fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform1fv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform1fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform1fv(arg0===null ? null : arg0._id, new Float32Array(arg1));
    break;
   }
  },
  uniform1i (location, x) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform1i' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform1i' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform1i(location===null ? null : location._id, x);
  },
  uniform1iv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Int32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform1iv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform1iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform1iv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform1iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform1iv(arg0===null ? null : arg0._id, new Int32Array(arg1));
    break;
   }
  },
  uniform2f (location, x, y) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'uniform2f' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform2f' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform2f(location===null ? null : location._id, x, y);
  },
  uniform2fv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Float32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform2fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform2fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform2fv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform2fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform2fv(arg0===null ? null : arg0._id, new Float32Array(arg1));
    break;
   }
  },
  uniform2i (location, x, y) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'uniform2i' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform2i' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform2i(location===null ? null : location._id, x, y);
  },
  uniform2iv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Int32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform2iv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform2iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform2iv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform2iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform2iv(arg0===null ? null : arg0._id, new Int32Array(arg1));
    break;
   }
  },
  uniform3f (location, x, y, z) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'uniform3f' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform3f' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform3f(location===null ? null : location._id, x, y, z);
  },
  uniform3fv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Float32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform3fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform3fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform3fv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform3fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform3fv(arg0===null ? null : arg0._id, new Float32Array(arg1));
    break;
   }
  },
  uniform3i (location, x, y, z) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'uniform3i' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform3i' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform3i(location===null ? null : location._id, x, y, z);
  },
  uniform3iv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Int32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform3iv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform3iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform3iv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform3iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform3iv(arg0===null ? null : arg0._id, new Int32Array(arg1));
    break;
   }
  },
  uniform4f (location, x, y, z, w) {
    if (arguments.length<5) throw new TypeError("Failed to execute 'uniform4f' on 'WebGLRenderingContext': 5 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform4f' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform4f(location===null ? null : location._id, x, y, z, w);
  },
  uniform4fv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Float32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform4fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform4fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform4fv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform4fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform4fv(arg0===null ? null : arg0._id, new Float32Array(arg1));
    break;
   }
  },
  uniform4i (location, x, y, z, w) {
    if (arguments.length<5) throw new TypeError("Failed to execute 'uniform4i' on 'WebGLRenderingContext': 5 arguments required, but only "+arguments.length+" present.");
    if (location!==null && !(location instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform4i' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform4i(location===null ? null : location._id, x, y, z, w);
  },
  uniform4iv (arg0, arg1) {
    let signature;
    switch (arguments.length) {
    case 2:
      if (arg1 instanceof Int32Array)
        signature = 0;
      else if (arg1 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<2) throw new TypeError("Failed to execute 'uniform4iv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform4iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform4iv(arg0===null ? null : arg0._id, arg1);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniform4iv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniform4iv(arg0===null ? null : arg0._id, new Int32Array(arg1));
    break;
   }
  },
  uniformMatrix2fv (arg0, arg1, arg2) {
    let signature;
    switch (arguments.length) {
    case 3:
      if (arg2 instanceof Float32Array)
        signature = 0;
      else if (arg2 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<3) throw new TypeError("Failed to execute 'uniformMatrix2fv' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniformMatrix2fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniformMatrix2fv(arg0===null ? null : arg0._id, arg1, arg2);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniformMatrix2fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniformMatrix2fv(arg0===null ? null : arg0._id, arg1, new Float32Array(arg2));
    break;
   }
  },
  uniformMatrix3fv (arg0, arg1, arg2) {
    let signature;
    switch (arguments.length) {
    case 3:
      if (arg2 instanceof Float32Array)
        signature = 0;
      else if (arg2 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<3) throw new TypeError("Failed to execute 'uniformMatrix3fv' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniformMatrix3fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniformMatrix3fv(arg0===null ? null : arg0._id, arg1, arg2);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniformMatrix3fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniformMatrix3fv(arg0===null ? null : arg0._id, arg1, new Float32Array(arg2));
    break;
   }
  },
  uniformMatrix4fv (arg0, arg1, arg2) {
    let signature;
    switch (arguments.length) {
    case 3:
      if (arg2 instanceof Float32Array)
        signature = 0;
      else if (arg2 instanceof Array)
        signature = 1;
      break;
    }
    if (arguments.length<3) throw new TypeError("Failed to execute 'uniformMatrix4fv' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    switch (signature) {
    case 0:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniformMatrix4fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniformMatrix4fv(arg0===null ? null : arg0._id, arg1, arg2);
    break;
    case 1:
    if (arg0!==null && !(arg0 instanceof WebGLUniformLocation)) throw new TypeError("Failed to execute 'uniformMatrix4fv' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLUniformLocation'.");
    gl.uniformMatrix4fv(arg0===null ? null : arg0._id, arg1, new Float32Array(arg2));
    break;
   }
  },
  useProgram (program) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'useProgram' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'useProgram' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    gl.useProgram(program===null ? null : program._id);
  },
  validateProgram (program) {
    if (arguments.length<1) throw new TypeError("Failed to execute 'validateProgram' on 'WebGLRenderingContext': 1 arguments required, but only "+arguments.length+" present.");
    if (program!==null && !(program instanceof WebGLProgram)) throw new TypeError("Failed to execute 'validateProgram' on 'WebGLRenderingContext': parameter 1 is not of type 'WebGLProgram'.");
    gl.validateProgram(program._id);
  },
  vertexAttrib1f (index, x) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'vertexAttrib1f' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib1f(index, x);
  },
  vertexAttrib1fv (index, values) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'vertexAttrib1fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib1fv(index, values);
  },
  vertexAttrib2f (index, x, y) {
    if (arguments.length<3) throw new TypeError("Failed to execute 'vertexAttrib2f' on 'WebGLRenderingContext': 3 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib2f(index, x, y);
  },
  vertexAttrib2fv (index, values) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'vertexAttrib2fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib2fv(index, values);
  },
  vertexAttrib3f (index, x, y, z) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'vertexAttrib3f' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib3f(index, x, y, z);
  },
  vertexAttrib3fv (index, values) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'vertexAttrib3fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib3fv(index, values);
  },
  vertexAttrib4f (index, x, y, z, w) {
    if (arguments.length<5) throw new TypeError("Failed to execute 'vertexAttrib4f' on 'WebGLRenderingContext': 5 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib4f(index, x, y, z, w);
  },
  vertexAttrib4fv (index, values) {
    if (arguments.length<2) throw new TypeError("Failed to execute 'vertexAttrib4fv' on 'WebGLRenderingContext': 2 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttrib4fv(index, values);
  },
  vertexAttribPointer (index, size, type, normalized, stride, offset) {
    if (arguments.length<6) throw new TypeError("Failed to execute 'vertexAttribPointer' on 'WebGLRenderingContext': 6 arguments required, but only "+arguments.length+" present.");
    gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
  },
  viewport (x, y, width, height) {
    if (arguments.length<4) throw new TypeError("Failed to execute 'viewport' on 'WebGLRenderingContext': 4 arguments required, but only "+arguments.length+" present.");
    gl.viewport(x, y, width, height);
  }
});
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(context, global.WebGLRenderingContext.prototype);
  } else {
    // $FlowFixMe
    context.__proto__ = global.WebGLRenderingContext.prototype;
  }
  return context;
};
