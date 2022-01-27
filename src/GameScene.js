

export default class GameScene extends Phaser.Scene
{

    constructor() {
        super('game-scene');
    }

    preload(){

        this.load.image('phaser-parcel', 'phaser_parcel.png')

    }

    create(){

        let { width, height } = this.sys.game.canvas;

        this.add.image(width * .5, height * .5, 'phaser-parcel');
    }

    update(time, delta) {

    }
}

