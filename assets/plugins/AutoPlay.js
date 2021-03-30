function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    //player.toggleMute();
    player.muted = !player.muted;
    player.play();
}

export default AutoPlay;