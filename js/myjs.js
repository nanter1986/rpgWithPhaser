var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var map;
var cursors;
var debugGraphics;
var helpText;
var player;
var showDebug = false;

function preload() {
    this.load.image('tiles', 'assets/magecity_1.png');
    this.load.tilemapCSV('map', 'assets/csv_mage.csv');
    this.load.spritesheet('player', 'assets/player.png', {
        frameWidth: 16,
        frameHeight: 16
    });

}

function create() {}
