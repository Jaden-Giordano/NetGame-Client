import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  preload() {
    this.load.image('title', 'assets/title/title.png');
  }

  create() {
    this.add.sprite(this.sys.game.config.width - (this.sys.game.config.width / 2), 150, 'title');

    this.add.sprite(100, 100, 'test');
  }
}

export default TitleScene;
