class animation extends Phaser.Scene{
    preload(){

        for(let i=1;i<=8;i++) {
            this.load.image('boy_run' + i, 'png/run/run-' + i + '.png');
        }

        for(let i=1;i<=10;i++) {
            this.load.image('boy_walk' + i, 'png/walk/walk-' + i + '.png');
        }

        for(let i=1;i<=10;i++) {
            this.load.image('boy_idle' + i, 'png/idle/idle2-' + i + '.png');
        }
    }

    create(){
        this.run_anim = this.add.sprite(400, 100, 'boy_run1').setOrigin(0,0);
        this.anims.create({
            key: 'animation_run',
            frames: [
                {key:'boy_run1'},
                {key:'boy_run2'},
                {key:'boy_run3'},
                {key:'boy_run4'},
                {key:'boy_run5'},
                {key:'boy_run6'},
                {key:'boy_run7'},
                {key:'boy_run8'}
            ],
            frameRate: 14,
            repeat: -1
        });
        this.run_anim.play('animation_run');
        this.run_anim.scale=1
    }

}