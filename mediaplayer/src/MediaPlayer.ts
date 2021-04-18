class MediaPlayer {
    public media: HTMLMediaElement;
    private plugins: Array<any>;// any[];
    container: HTMLElement;
    constructor(config: { el: any; plugins: any; }) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        // console.log(this.plugins);
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
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
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }
    
    togglePlay() {
        (this.media.paused) ? this.play() : this.pause();
    }

    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}

export default MediaPlayer;