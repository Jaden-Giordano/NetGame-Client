import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('test', 'assets/test.png');
  }

  create() {
    this.scene.start('TitleScene');
  }
}

export default BootScene;
