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

    player = this.physics.add.sprite(0, 0, "image1", 0);
    player.setScale(0.25);
    //set camera to follow player
    player.setCollideWorldBounds(true);
    //player.body.setGravityY(300);
    logObject(player);
    // This will watch the player and worldLayer every frame to check for collisions
    this.physics.add.collider(player, layerGround);
    this.cameras.main.startFollow(player);
    gButton = this.add.sprite(400, 400, "gButton").setScale(0.1).setInteractive().setScrollFactor(0);
    gButton.on('pointerdown', function() {
        console.log("clicked");
        player.setVelocityX(160);
        //move character here

    });
    gButton.on('pointerup', function() {
        console.log("released");
        player.setVelocityX(0);

    });
    //set camera to stop at world bounds
    //make and test animation for player
    var standAnim = this.anims.create({
        key: 'stand',
        frames: this.anims.generateFrameNumbers('image1', {
            start: 0,
            end: 2
        }),
        frameRate: 10,
        repeat: -1
    });
    player.play('stand');
    logObject(standAnim);
    console.log("create2");

}

function update1() {
    //make button follow camera here?
}

function logObject(obj) {
    console.log("My log:" + JSON.stringify(obj));

}
