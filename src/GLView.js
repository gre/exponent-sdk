// @flow
'use strict';

import React, { PropTypes } from 'react';
import { View, requireNativeComponent } from 'react-native';
import fromEXGL from "./generated/gl";

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

const enhanceWithLogging = (gl: any): void => {

  const formatObj = obj =>
  obj instanceof global.WebGLObject || obj instanceof global.WebGLUniformLocation
  ? '['+obj.constructor.name+' '+obj._id+']'
  : obj instanceof global.WebGLActiveInfo || obj instanceof global.WebGLShaderPrecisionFormat
    ? '['+obj.constructor.name+Object.keys(obj).map(key => ` ${key}:${obj[key]}`).join('')+']'
    : typeof obj === "string"
      ? '"'+obj+'"'
      : typeof obj === "object" && obj instanceof Array
        ? '['+obj.join(',')+']'
        : String(obj);

  // Enable/disable logging of all GL function calls
  let enableLogging = false;
  // $FlowFixMe
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
              console.log(`EXGL: ${key}(${args.map(arg => formatObj(arg)).join(', ')})`);
              try {
                const r = original.apply(gl, args);
                console.log(`EXGL: => ${formatObj(r)}`);
                return r;
              }
              catch (e) {
                console.warn(`EXGL: throws ${e}`);
                throw e;
              }
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
};

// Get the GL interface from an EXGLContextID and do JS-side setup
const getGl = (exglCtxId) => {
  const exgl = global.__EXGLContexts[exglCtxId];
  delete global.__EXGLContexts[exglCtxId];

  const gl = fromEXGL(exgl);

  // add non standard methods
  // $FlowFixMe
  gl.endFrameEXP = () => exgl.endFrameEXP();

  // add fields
  // $FlowFixMe
  const viewport = gl.getParameter(gl.VIEWPORT);
  // $FlowFixMe
  gl.canvas = null;
  // $FlowFixMe
  gl.drawingBufferWidth = viewport[2];
  // $FlowFixMe
  gl.drawingBufferHeight = viewport[3];

  if (__DEV__) enhanceWithLogging(gl);
  return gl;
};
