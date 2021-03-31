class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }
    run(player){
        console.log('RUN PLUGIN');
        this.player = player;
        console.log(this.player);
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media);
    }

    handlerIntersection(entries){
        const entry = entries[0];
        console.log(this);

        entry.intersectionRatio >= this.threshold ? this.player.play() : this.player.media.pause()
    }
}

export default AutoPause