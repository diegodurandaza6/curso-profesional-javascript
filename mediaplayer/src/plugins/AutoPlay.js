var AutoPlay = /** @class */ (function () {
    function AutoPlay() {
    }
    AutoPlay.prototype.run = function (player) {
        //player.toggleMute();
        player.media.muted = !player.media.muted;
        player.play();
    };
    return AutoPlay;
}());
export default AutoPlay;
