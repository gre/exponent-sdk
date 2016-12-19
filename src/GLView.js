'use strict';

import React, { PropTypes } from 'react';
import { View, requireNativeComponent } from 'react-native';


// A component that acts as an OpenGL render target.

export default class GLView extends React.Component {
  static propTypes = {
    // Called when the OpenGL context is created, with the context object as a
    // parameter. The context object has an API mirroring WebGL's
    // WebGLRenderingContext.
    onContextCreate: PropTypes.func,

    ...View.propTypes,
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { onContextCreate, ...viewProps } = this.props;

    // NOTE: Removing `backgroundColor: 'transparent'` causes a performance
    //       regression. Not sure why yet...
    return (
      <View {...viewProps}>
        <GLView.NativeView
          style={{ flex: 1, backgroundColor: 'transparent' }}
          onSurfaceCreate={this._onSurfaceCreate}
        />
      </View>
    );
  }

  _onSurfaceCreate = ({ nativeEvent: { exglCtxId } }) => {
    const gl = getGl(exglCtxId);
    if (this.props.onContextCreate) {
      this.props.onContextCreate(gl);
    }
  }

  static NativeView = requireNativeComponent('ExponentGLView', GLView, {
    nativeOnly: { onSurfaceCreate: true },
  });
}

// Class of `gl` objects
class WebGLRenderingContext {};

class WebGLObject {
  constructor (id) {
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
  constructor (id) {
    this._id = id;
  }
}
class WebGLActiveInfo {
  constructor (obj) {
    Object.assign(this, obj);
  }
}
class WebGLShaderPrecisionFormat {
  constructor (obj) {
    Object.assign(this, obj);
  }
}

const unwrap = obj => obj ? obj._id : obj;

const isBuffer = buffer => buffer instanceof WebGLBuffer;
const isFramebuffer = framebuffer => framebuffer instanceof WebGLFramebuffer;
const isProgram = program => program instanceof WebGLProgram;
const isRenderbuffer = renderbuffer => renderbuffer instanceof WebGLRenderbuffer;
const isShader = shader => shader instanceof WebGLShader;
const isTexture = texture => texture instanceof WebGLTexture;

// Expose to global, like in WebGL
global.WebGLRenderingContext = WebGLRenderingContext;
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

// Get the GL interface from an EXGLContextID and do JS-side setup
const getGl = (exglCtxId) => {
  const gl = global.__EXGLContexts[exglCtxId];
  delete global.__EXGLContexts[exglCtxId];
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(gl, global.WebGLRenderingContext.prototype);
  } else {
    gl.__proto__ = global.WebGLRenderingContext.prototype;
  }

  // No canvas yet...
  gl.canvas = null;

  // FIXME: greweb note: maybe shouldn't override the methods, but just keep the original rawGL
  // we would never have to keep reusing the "original" methods and it would make JS faster.
  // that means returning a new object at the end and not the __EXGLContexts instance.
  // it would probably help for more easily having Flowtype working.
  // would also be great to throw exception if args are invalid. consistently with WebGL.

  // following ordering of spec: https://www.khronos.org/registry/webgl/specs/latest/1.0/webgl.idl

  const originalAttachShader = gl.attachShader;
  gl.attachShader = (program, shader) => {
    originalAttachShader.call(gl, unwrap(program), unwrap(shader));
  };

  const originalBindAttribLocation = gl.bindAttribLocation;
  gl.bindAttribLocation = (program, index, name) => {
    originalBindAttribLocation.call(gl, unwrap(program), index, name);
  };

  const originalBindBuffer = gl.bindBuffer;
  gl.bindBuffer = (target, buffer) => {
    originalBindBuffer.call(gl, target, unwrap(buffer));
  };

  const originalBindFramebuffer = gl.bindFramebuffer;
  gl.bindFramebuffer = (target, framebuffer) => {
    originalBindFramebuffer.call(gl, target, unwrap(framebuffer));
  };

  const originalBindRenderbuffer = gl.bindRenderbuffer;
  gl.bindRenderbuffer = (target, renderbuffer) => {
    originalBindRenderbuffer.call(gl, target, unwrap(renderbuffer));
  };

  const originalBindTexture = gl.bindTexture;
  gl.bindTexture = (target, texture) => {
    originalBindTexture.call(gl, target, unwrap(texture));
  };

  const originalCompileShader = gl.compileShader;
  gl.compileShader = (shader) => {
    originalCompileShader.call(gl, unwrap(shader));
  };

  // create functions

  const originalCreateBuffer = gl.createBuffer;
  gl.createBuffer = () => {
    const res = originalCreateBuffer.call(gl);
    return res!==null ? new WebGLBuffer(res) : res;
  };

  const originalCreateFramebuffer = gl.createFramebuffer;
  gl.createFramebuffer = () => {
    const res = originalCreateFramebuffer.call(gl);
    return res!==null ? new WebGLFramebuffer(res) : res;
  };

  const originalCreateProgram = gl.createProgram;
  gl.createProgram = () => {
    const res = originalCreateProgram.call(gl);
    return res!==null ? new WebGLProgram(res) : res;
  };

  const originalCreateRenderbuffer = gl.createRenderbuffer;
  gl.createRenderbuffer = () => {
    const res = originalCreateRenderbuffer.call(gl);
    return res!==null ? new WebGLRenderbuffer(res) : res;
  };
  const originalCreateShader = gl.createShader;
  gl.createShader = (type) => {
    const res = originalCreateShader.call(gl, type);
    return res!==null ? new WebGLShader(res) : res;
  };

  const originalCreateTexture = gl.createTexture;
  gl.createTexture = () => {
    const res = originalCreateTexture.call(gl);
    return res!==null ? new WebGLTexture(res) : res;
  };

  // delete functions

  const originalDeleteBuffer = gl.deleteBuffer;
  gl.deleteBuffer = (buffer) => {
    originalDeleteBuffer.call(gl, unwrap(buffer));
  };

  const originalDeleteFramebuffer = gl.deleteFramebuffer;
  gl.deleteFramebuffer = (framebuffer) => {
    originalDeleteFramebuffer.call(gl, unwrap(framebuffer));
  };

  const originalDeleteProgram = gl.deleteProgram;
  gl.deleteProgram = (program) => {
    originalDeleteProgram.call(gl, unwrap(program));
  };

  const originalDeleteRenderbuffer = gl.deleteRenderbuffer;
  gl.deleteRenderbuffer = (renderbuffer) => {
    originalDeleteRenderbuffer.call(gl, unwrap(renderbuffer));
  };

  const originalDeleteShader = gl.deleteShader;
  gl.deleteShader = (shader) => {
    originalDeleteShader.call(gl, unwrap(shader));
  };

  const originalDeleteTexture = gl.deleteTexture;
  gl.deleteTexture = (texture) => {
    originalDeleteTexture.call(gl, unwrap(texture));
  };

  const originalDetachShader = gl.detachShader;
  gl.detachShader = (program, shader) => {
    originalDetachShader.call(gl, unwrap(program), unwrap(shader));
  };

  const originalFramebufferRenderbuffer = gl.framebufferRenderbuffer;
  gl.framebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
    originalFramebufferRenderbuffer.call(gl, target, attachment, renderbuffertarget, unwrap(renderbuffer));
  };

  const originalFramebufferTexture2D = gl.framebufferTexture2D;
  gl.framebufferTexture2D = (target, attachment, textarget, texture, level) => {
    originalFramebufferTexture2D.call(gl, target, attachment, textarget, unwrap(texture), level);
  };

  const originalGetActiveAttrib = gl.getActiveAttrib;
  gl.getActiveAttrib = (program, index) => {
    const res = originalGetActiveAttrib.call(gl, unwrap(program), index);
    return res!==null ? new WebGLActiveInfo(res) : res;
  };

  const originalGetActiveUniform = gl.getActiveUniform;
  gl.getActiveUniform = (program, index) => {
    const res = originalGetActiveUniform.call(gl, unwrap(program), index);
    return res!==null ? new WebGLActiveInfo(res) : res;
  };

  const originalGetAttachedShaders = gl.getAttachedShaders;
  gl.getAttachedShaders = (program) => {
    const res = originalGetAttachedShaders.call(gl, unwrap(program));
    return res!==null ? res.map(id => new WebGLShader(id)) : res;
  };

  const originalGetAttribLocation = gl.getAttribLocation;
  gl.getAttribLocation = (program, name) =>
    originalGetAttribLocation.call(gl, unwrap(program), name);

  const originalGetProgramParameter = gl.getProgramParameter;
  gl.getProgramParameter = (program, pname) =>
    originalGetProgramParameter.call(gl, unwrap(program), pname);

  const originalGetProgramInfoLog = gl.getProgramInfoLog;
  gl.getProgramInfoLog = (program) =>
    originalGetProgramInfoLog.call(gl, unwrap(program));

  const originalGetShaderParameter = gl.getShaderParameter;
  gl.getShaderParameter = (shader, pname) =>
    originalGetShaderParameter.call(gl, unwrap(shader), pname);

  const originalGetShaderPrecisionFormat = gl.getShaderPrecisionFormat;
  gl.getShaderPrecisionFormat = (shadertype, precisiontype) => {
    const res = originalGetShaderPrecisionFormat.call(gl, shadertype, precisiontype);
    return res!==null ? new WebGLShaderPrecisionFormat(res) : res;
  };

  const originalGetShaderInfoLog = gl.getShaderInfoLog;
  gl.getShaderInfoLog = (shader) =>
    originalGetShaderInfoLog.call(gl, unwrap(shader));

  const originalGetShaderSource = gl.getShaderSource;
  gl.getShaderSource = (shader) =>
    originalGetShaderSource.call(gl, unwrap(shader));

  const originalGetUniform = gl.getUniform;
  gl.getUniform = (program, location) =>
    originalGetUniform.call(gl, unwrap(program), unwrap(location));

  const originalGetUniformLocation = gl.getUniformLocation;
  gl.getUniformLocation = (program, name) => {
    const res = originalGetUniformLocation.call(gl, unwrap(program), name);
    return res!==null ? new WebGLUniformLocation(res) : res;
  };

  gl.isBuffer = isBuffer;
  gl.isFramebuffer = isFramebuffer;
  gl.isProgram = isProgram;
  gl.isRenderbuffer = isRenderbuffer;
  gl.isShader = isShader;
  gl.isTexture = isTexture;

  const originalLinkProgram = gl.linkProgram;
  gl.linkProgram = (program) => {
    originalLinkProgram.call(gl, unwrap(program));
  };

  const originalShaderSource = gl.shaderSource;
  gl.shaderSource = (shader, source) => {
    originalShaderSource.call(gl, unwrap(shader), source);
  };

  // Uniform Functions
  [
    { func: 'uniform1f' },
    { func: 'uniform1fv', arg: 1, type: Float32Array },
    { func: 'uniform2f' },
    { func: 'uniform2fv', arg: 1, type: Float32Array },
    { func: 'uniform3f' },
    { func: 'uniform3fv', arg: 1, type: Float32Array },
    { func: 'uniform4f' },
    { func: 'uniform4fv', arg: 1, type: Float32Array },
    { func: 'uniform1i' },
    { func: 'uniform1iv', arg: 1, type: Int32Array },
    { func: 'uniform2i' },
    { func: 'uniform2iv', arg: 1, type: Int32Array },
    { func: 'uniform3i' },
    { func: 'uniform3iv', arg: 1, type: Int32Array },
    { func: 'uniform4i' },
    { func: 'uniform4iv', arg: 1, type: Int32Array },
    { func: 'uniformMatrix2fv', arg: 2, type: Float32Array },
    { func: 'uniformMatrix3fv', arg: 2, type: Float32Array },
    { func: 'uniformMatrix4fv', arg: 2, type: Float32Array },
  ].forEach(({ func, arg, type }) => {
    const original = gl[func];
    gl[func] = (...args) => {
      // NOTE: Keep this fast
      if (type) { // need sequence -> TypedArray conversion
        args[arg] = new type(args[arg]);
      }
      args[0] = unwrap(args[0]); // the first parameter is always a WebGLUniformLocation
      return original.apply(gl, args);
    };
  });

  // Vertex Functions
  [
    { func: 'vertexAttrib1fv', arg: 1, type: Float32Array },
    { func: 'vertexAttrib2fv', arg: 1, type: Float32Array },
    { func: 'vertexAttrib3fv', arg: 1, type: Float32Array },
    { func: 'vertexAttrib4fv', arg: 1, type: Float32Array },
  ].forEach(({ func, arg, type }) => {
    const original = gl[func];
    gl[func] = (...args) => {
      // NOTE: Keep this fast
      args[arg] = new type(args[arg]); // need sequence -> TypedArray conversion
      return original.apply(gl, args);
    };
  });

  const originalUseProgram = gl.useProgram;
  gl.useProgram = (program) => {
    originalUseProgram.call(gl, unwrap(program));
  };

  const originalValidateProgram = gl.validateProgram;
  gl.validateProgram = (program) => {
    originalValidateProgram.call(gl, unwrap(program));
  };



  // Drawing buffer width/height
  // TODO(nikki): Make this dynamic
  const viewport = gl.getParameter(gl.VIEWPORT);
  gl.drawingBufferWidth = viewport[2];
  gl.drawingBufferHeight = viewport[3];

  // Enable/disable logging of all GL function calls
  let enableLogging = false;
  Object.defineProperty(gl, 'enableLogging', {
    configurable: true,
    get() {
      return enableLogging;
    },
    set(enable) {
      if (enable === enableLogging) {
        return;
      }
      if (enable) {
        Object.keys(gl).forEach((key) => {
          if (typeof gl[key] === 'function') {
            const original = gl[key];
            gl[key] = (...args) => {
              console.log(`EXGL: ${key}(${args.join(', ')})`);
              const r = original.apply(gl, args);
              console.log(`EXGL:    = ${r}`);
              return r;
            };
            gl[key].original = original;
          }
        });
      } else {
        Object.keys(gl).forEach((key) => {
          if (typeof gl[key] === 'function' && gl[key].original) {
            gl[key] = gl[key].original;
          }
        });
      }
      enableLogging = enable;
    },
  });

  return gl;
};
