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
                y: 300
            },
            debug: false
        }
    },
    scene: scene1


};
console.log("config:" + JSON.stringify(config));
var game = new Phaser.Game(config);
console.log('start1');
console.log(new Date().toLocaleString());
//console.log(game);

function preload1() {
    console.log("preload1");
    //add the player ,and animate it
    this.load.image("sky", "assets/sky.jpg");
    this.load.image("2", "assets/2.png");
    this.load.image('1', 'assets/1.png');
    this.load.image('mage', 'assets/magecity_1.png');
    this.load.tilemapTiledJSON('map', 'assets/oneTilemap.json');
    this.load.spritesheet("image1",
        "assets/zombie-male-base.png", {
            frameWidth: 48,
            frameHeight: 48
        });
    console.log("preload2");
}


function create1() {
    console.log("create1");
    map = this.make.tilemap({
        key: 'map'
    });
    //try with one map and layer first
    //var tiles1 = map.addTilesetImage('1', '1');
    var tiles2 = map.addTilesetImage('2', '2');
    var layerGround = map.createStaticLayer("Layer 1", tiles2);
    var layerThings = map.createStaticLayer("things", tiles2)
    map.setCollision();
    //add controls to check collisiins
    //var layer = map.createStaticLayer(layerID, tileset, x, y); // x, y : offset in pxiels
    //var tilesMage = map.addTilesetImage('mage', 'mage');

    //this.add.image(600, 400, "sky");
    player = this.physics.add.sprite(200, 200, "image1", 0);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.body.setGravityY(300)
    logObject(player);
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
