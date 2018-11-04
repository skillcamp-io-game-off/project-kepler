import Phaser from "phaser";

class MoveToMouse extends Phaser.Scene {
  constructor() {
    super({ key: "MoveToMouse" });
  }

  preload = () => {
    this.load.image("Rocket", "../assets/rocket.png");
  };

  create = () => {
    this.text = this.add.text(16, 16, "Hold down and move mouse", {
      fontSize: "32px",
      fill: "#222"
    });

    this.rocket = this.physics.add.sprite(250, 0, "Rocket");

    this.rocket.setCollideWorldBounds(true);
    this.rocket.body.onWorldBounds = true;
    this.rocket.setBounce(0.1, 0.2);
    this.rocket.setGravityY(980);

    this.camera = this.cameras.add(0, 0, window.innerWidth, window.innerHeight);
    this.camera.setBackgroundColor("#bada55");

    console.log("Scene", this);
    console.log("Sprite", this.rocket);
    console.log("Camera", this.camera);

    this.input.keyboard.on("keyup", event => {
      if (event.key === "1") {
        this.scene.start("HelloWorld");
      }
    });
  };

  update = () => {
    if (this.input.activePointer.isDown) {
      this.rocket.rotation =
        this.physics.moveTo(this.rocket, this.input.x, this.input.y, 60, 250) +
        Math.PI / 2;
    }
  };
}

export default MoveToMouse;
