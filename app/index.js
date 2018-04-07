import Phaser from 'phaser';

import BootScene from './scenes/boot-scene';
import TitleScene from './scenes/title-scene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, TitleScene],
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
