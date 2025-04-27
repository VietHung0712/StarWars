import * as THREE from "../build/three.module.js";

export class SceneManager {
    constructor(container) {
        this.container = container;
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 50, 5);

        // Ánh sáng
        this.ambientLight = new THREE.AmbientLight(0xffffff);
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        this.scene.add(this.ambientLight, this.directionalLight);

        this.axesHelper = new THREE.AxesHelper(50);
        this.axesHelperRotate = new THREE.AxesHelper(50);
        this.axesHelperRotate.rotateY(toRadians(180));
        this.scene.add(this.ambientLight, this.axesHelperRotate);
    }

    onResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
}
