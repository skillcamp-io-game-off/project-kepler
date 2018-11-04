import Phaser from 'phaser';
import HelloWorld from './scenes/helloWorld.js'
import MoveToMouse from './scenes/moveToMouse.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [HelloWorld, MoveToMouse]
};

const game = new Phaser.Game(config);