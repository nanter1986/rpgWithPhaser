console.log('start');
var scene1 = {
    key: 'scene1',
    active: true,
    preload: preload1,
    create: create1,
    update: update1
};
console.log("scene1:" + JSON.stringify(scene1));
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: scene1


};
console.log("config:" + JSON.stringify(config));
var game = new Phaser.Game(config);
console.log('start1');
var cursors;
var gButton;
console.log(new Date().toLocaleString());
//console.log(game);

function preload1() {
    console.log("preload1");
    //add the player ,and animate it
    this.load.image("new", "assets/new.png");
    this.load.image('gButton', 'assets/gButton.png');
    this.load.tilemapCSV('map', 'assets/new.csv');
    this.load.spritesheet("image1",
        "assets/zombie-male-base.png", {
            frameWidth: 48,
            frameHeight: 48
        });
    cursors = this.input.keyboard.createCursorKeys();
    logObject(cursors);
    //make cursors move player
    console.log("preload2");

}


function create1() {
    console.log("create1");
    map = this.make.tilemap({
        key: 'map',
        tileWidth: 16,
        tileHeight: 16
    });
    //try with one map and layer first
    var tiles2 = map.addTilesetImage('new');
    var layerGround = map.createStaticLayer(0, tiles2, 0, 0);
    layerGround.setCollision(38);
    logObject(layerGround);

    //map.setCollision();
    //add controls to check collisiins
    //var layer = map.createStaticLayer(layerID, tileset, x, y); // x, y : offset in pxiels
    //var tilesMage = map.addTilesetImage('mage', 'mage');

    //this.add.image(600, 400, "sky");
    player = this.physics.add.sprite(0, 0, "image1", 0);
    player.setScale(0.5);
    player.setCollideWorldBounds(true);
    //player.body.setGravityY(300);
    logObject(player);
    // This will watch the player and worldLayer every frame to check for collisions
    this.physics.add.collider(player, layerGround);
    gButton = this.add.sprite(400, 400, "gButton").setScale(0.1).setInteractive();
    gButton.on('pointerdown', function() {
        console.log("clicked");
        player.setVelocityX(160);
        //move character here

    });
    gButton.on('pointerup', function() {
        console.log("released");
        player.setVelocityX(0);

    });
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });
    console.log("create2");

}

function update1() {

}

function logObject(obj) {
    console.log("My log:" + JSON.stringify(obj));

}
