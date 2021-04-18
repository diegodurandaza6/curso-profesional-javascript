import MediaPlayer from '@diegodurandaza6/platzimediaplayer';
import AutoPlay from '@diegodurandaza6/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@diegodurandaza6/platzimediaplayer/lib/plugins/AutoPause';
import Ads from "@diegodurandaza6/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector('video');
const player = new MediaPlayer({
    el:video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const button: HTMLElement = document.querySelector('#button');
button.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('#buttonMute');
buttonMute.onclick = () => player.toggleMute();

// Valida que el navegador tenga el feature serviceWorker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err => console.log(err.message))
}