import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() {
    }

    run(player: MediaPlayer) {
        //player.toggleMute();
        player.media.muted = !player.media.muted;
        player.play();
    }
}

export default AutoPlay;