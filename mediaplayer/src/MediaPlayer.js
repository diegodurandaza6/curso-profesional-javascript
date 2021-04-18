var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        // console.log(this.plugins);
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        // const player = {
        //     play: () => this.play(),
        //     //pause: () => this.pause(),
        //     //toggleMute: () => this.toggleMute()
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },
        //     set muted(value) {
        //         this.media.muted = value;
        //     }
        // };
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        (this.media.paused) ? this.play() : this.pause();
    };
    MediaPlayer.prototype.toggleMute = function () {
        this.media.muted = !this.media.muted;
    };
    return MediaPlayer;
}());
export default MediaPlayer;
