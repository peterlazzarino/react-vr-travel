import {VRInstance} from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'GATVR', parent, {
    cursorEnabled: true
  });
  vr.render = function() { };
  vr.start();
  return vr;
}

window.ReactVR = {init};
