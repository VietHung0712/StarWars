import * as THREE from "../build/three.module.js";
import { GLTFLoader } from "../build/GLTFLoader.js";

export class ModelLoader {
    constructor(scene) {
        this.scene = scene;
        this.loader = new GLTFLoader();
        this.model = null;
    }

    loadModel(path, onLoadCallback) {
        this.loader.load(path, (gltf) => {
            this.model = gltf.scene;
            this.model.position.set(0, 0, 0);
            this.model.rotation.set(0, 0, 0);
            this.model.scale.set(1, 1, 1);
            this.model.updateMatrixWorld(true);
            
            this.scene.add(this.model);

            if (onLoadCallback) onLoadCallback(this.model);
        }, undefined, (error) => {
            console.error("Lỗi khi tải mô hình:", error);
        });
    }
}
