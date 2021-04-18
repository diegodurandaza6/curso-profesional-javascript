var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        //console.log('RUN PLUGIN');
        this.player = player;
        //console.log(this.player);
        var observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    };
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        //console.log(this);
        entry.intersectionRatio >= this.threshold ? this.player.play() : this.player.media.pause();
    };
    AutoPause.prototype.handlerVisibilityChange = function () {
        document.visibilityState === 'visible' ? this.player.play() : this.player.media.pause();
    };
    return AutoPause;
}());
export default AutoPause;
