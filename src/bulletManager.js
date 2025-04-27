import * as THREE from "../build/three.module.js";

export class BulletManager {
    constructor(scene) {
        this.scene = scene;
        this.bullets = [];
        this.bulletSpeed = 0.5;
        this.maxBullets = 50;
    }

    shootBullet(position, direction) {
        if (this.bullets.length >= this.maxBullets) {
            let oldBullet = this.bullets.shift();
            this.scene.remove(oldBullet);
        }

        let geometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 5);
        let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        let bullet = new THREE.Mesh(geometry, material);

        bullet.position.copy(position);
        bullet.lookAt(position.clone().add(direction));
        bullet.rotateX(Math.PI / 2);

        this.scene.add(bullet);
        this.bullets.push(bullet);
    }

    update() {
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            let bullet = this.bullets[i];
            bullet.translateY(this.bulletSpeed);

            if (bullet.position.y > 200) {
                this.scene.remove(bullet);
                this.bullets.splice(i, 1);
            }
        }
    }
}
