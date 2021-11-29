class Tableau1 extends Phaser.Scene{
    preload(){

        this.loadFrames('boy_run','Characters/boy/boy_style_1/PNG/run/Layer-',8)
        for(let i=1;i<=10;i++) {
            this.load.image('boy_walk' + i, 'png/walk/walk-' + i + '.png');
        }
        for(let i=1;i<=10;i++) {
            this.load.image('boy_idle' + i, 'png/idle/idle2-' + i + '.png');
        }
    }
    create(){
        this.run_anim = this.add.sprite(400, 100, 'boy_run1').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'animation_run',
            frames: this.getFrames("boy_run", 8),
            frameRate: 12,
            repeat: -1
        });
        this.run_anim.play('animation_run');
        this.run_anim.scale=1
    }

    /**
     * Renvoie un tableau d'images
     * @param {string} prefix Préfixe de la clé (key) à générer
     * @param {string} url base d'url pour charger le fichier
     * @param {Number} length combien d'images charger?
     * @returns {*[]}
     */
    loadFrames(prefix,url,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            this.load.image(prefix + i,url+i+'.png')
        }
        return frames;
    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }

}