create()
{
    this.idle = this.add.sprite(0, 0, 'animation').setOrigin(0,0);
    console.log(frames)
    this.anims.create({
        key: 'animation',
        frames: this.getFrames("animation",longueur),
        frameRate: 12,
        repeat: -1
    });
    this.idle.play('animation');

}

/**
 * Renvoie un tableau d'images
 * @param prefix
 * @param length
 * @returns {*[]}
 */
getFrames(prefix,length){
    let frames=[];
    for (let i=1;i<=length;i++){
        frames.push({key: prefix+i});
    }
    return frames;
}
