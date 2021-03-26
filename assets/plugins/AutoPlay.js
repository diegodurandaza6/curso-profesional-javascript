function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    player.toggleMute();
    player.play();
}

export default AutoPlay;