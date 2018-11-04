class HelloWorld extends Phaser.Scene {
  constructor() {
    super({ key: "HelloWorld" });
  }

  preload = () => {
    this.load.image("sky", "../assets/space.png");
    this.load.image("logo", "../assets/phaser.png");
    this.load.image("red", "../assets/red.png");
  };

  create = () => {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD"
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    this.input.keyboard.on("keyup", e => {
      if (e.key === "2") {
        this.scene.start("MoveToMouse");
      }
    });
  };

  update = () => {};
}

export default HelloWorld;
