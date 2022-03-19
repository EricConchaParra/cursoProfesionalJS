import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/autoplay.js";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("playButton");
const buttonMute = document.getElementById("muteButton");

const player = new MediaPlayer({
  media: video,
  btnPlay: buttonPlay,
  btnMute: buttonMute,
  plugins: [new AutoPlay()],
});

buttonPlay.onclick = () => player.play();
buttonMute.onclick = () => player.mute();
