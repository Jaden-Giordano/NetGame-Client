import Phaser from 'phaser';

function preload() {
  this.load.image('test', 'assets/test.png');
}

function create() {
  this.add.image(100, 100, 'test');
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: { preload, create },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
