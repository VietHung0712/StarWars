import * as THREE from "../build/three.module.js";

export class Background {
    static setSpaceBackground(scene) {
        var path = './Image/terrain/';
        var format = '.jpg';
        var urls = [
            path + 'space-posx' + format, path + 'space-negx' + format,
            path + 'space-posy' + format, path + 'space-negy' + format,
            path + 'space-posz' + format, path + 'space-negz' + format
        ];
        let loader = new THREE.CubeTextureLoader();
        scene.background = loader.load(urls);
    }
}
