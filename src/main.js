import Phaser from '../node_modules/phaser'

import GameScene from "./GameScene";

let screen_width = window.innerWidth
let screen_height = window.innerHeight

const config = {
    type: Phaser.AUTO,
    width: screen_width,
    height: screen_height,
    scene: [GameScene]
};

const game = new Phaser.Game(config);
export default game



