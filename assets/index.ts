import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el:video,
    plugins: [new AutoPlay(), new AutoPause()]
});

const button: HTMLElement = document.querySelector('#button');
button.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('#buttonMute');
buttonMute.onclick = () => player.toggleMute();

// Valida que el navegador tenga el feature serviceWorker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err => console.log(err.message))
}