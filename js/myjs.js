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
var layer;

function preload() {
    game.load.tilemap('map', '../assets/csv_mage.csv', null, Phaser.Tilemap.CSV);
    this.load.image('tiles', 'assets/magecity_1.png');
    game.load.spritesheet('player', 'assets/sprites/spaceman.png', 16, 16);
    //find sprite and load it
    //load a map of tiles
    //move a character in it
    //have collission with walls
    //have door to other scene
    this.load.spritesheet('player', 'assets/player.png', {
        frameWidth: 16,
        frameHeight: 16
    });

}

function create() {
    //**doc**
    map = game.add.tilemap('map', 16, 16);
    map.addTilesetImage('tiles')
    layer = map.createLayer(0);
    layer.resizeWorld()
    map.setCollisionBetween(54, 83);
    layer.debug = true;

    //  Player
    player = game.add.sprite(48, 48, 'player', 1);
    player.animations.add('left', [8, 9], 10, true);
    player.animations.add('right', [1, 2], 10, true);
    player.animations.add('up', [11, 12, 13], 10, true);
    player.animations.add('down', [4, 5, 6], 10, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.setSize(10, 14, 2, 1);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

    var help = game.add.text(16, 16, 'Arrows to move', {
        font: '14px Arial',
        fill: '#ffffff'
    });

    help.fixedToCamera = true;



}

function update() {
    game.physics.arcade.collide(player, layer);
    player.body.velocity.set(0)
    if (cursors.left.isDown) {
        player.body.velocity.x = -100;
        player.play('left');
    } else if (cursors.right.isDown) {
        player.body.velocity.x = 100;
        player.play('right');
    } else if (cursors.up.isDown) {
        player.body.velocity.y = -100;
        player.play('up');
    } else if (cursors.down.isDown) {
        player.body.velocity.y = 100;
        player.play('down');
    } else {
        player.animations.stop();
    }

}

function render() {

    game.debug.body(player);

}
