import { VRInstance } from 'react-vr-web';
import { Scene } from "three";
import { MouseRayCaster } from "ovrui";
import ControllerRayCaster from 'react-vr-controller-raycaster';

function init(bundle, parent, options) {
  const scene = new Scene(); 

  const vr = new VRInstance(bundle, 'VR_Travel', parent, {
    raycasters: [
      new MouseRayCaster()
    ],

    scene: scene,
    cursorVisibility: 'visible',
    ...options
  });

  vr.render = function() {

  };
  
  vr.start();
  return vr;
}

window.ReactVR = {init};
