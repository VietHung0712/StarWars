import { SceneManager } from "./sceneManager.js";
import { ModelLoader } from "./modelLoader.js";
import { Controller } from "./controller.js";
import { Background } from "./background.js";
import { BulletManager } from "./bulletManager.js";

const container = $("#container3D");
const powerFireElement = $('#centerpowerId');
const xwingCockpit = $("#xwing-cockpit");

const sceneManager = new SceneManager(container);
Background.setSpaceBackground(sceneManager.scene);

const modelLoader = new ModelLoader(sceneManager.scene);
modelLoader.loadModel("./models/xwing-2.glb", (model) => {
    main(model);
});

function main(model){
    const bulletManager = new BulletManager(sceneManager.scene);

    const controller = new Controller(model, sceneManager.camera, powerFireElement, bulletManager, xwingCockpit);

    function animate() {
        requestAnimationFrame(animate);
        controller.update();
        bulletManager.update();
        sceneManager.render();
    }

    animate();
}

window.addEventListener("resize", () => sceneManager.onResize());
