class AutoPause{
    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player){
        //console.log('RUN PLUGIN');
        this.player = player;
        //console.log(this.player);
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }

    handlerIntersection(entries){
        const entry = entries[0];
        //console.log(this);

        entry.intersectionRatio >= this.threshold ? this.player.play() : this.player.media.pause()
    }

    handlerVisibilityChange(){
        document.visibilityState === 'visible' ? this.player.play() : this.player.media.pause()
    }
}

export default AutoPause