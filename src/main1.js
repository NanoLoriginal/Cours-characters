var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    pixelArt: true,
    parent: 'game',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('layer1', 'Characters/boy/boy_style_1/PNG/run/Layer-1.png');
}

function create ()
{
    var marker = this.add.image(100, 100, 'layer1').setAlpha(0.3);
    var image = this.add.image(100, 100, 'layer1');

    //  flipY will call toggleFlipY on the image whenever it yoyos or repeats

    var tween = this.tweens.add({
        targets: image,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        flipY: true,
        yoyo: true,
        repeat: -1
    });
}