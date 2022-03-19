class MediaPlayer {
  constructor(config) {
    this.media = config.media;
    this.buttonPlay = config.btnPlay;
    this.buttonMute = config.btnMute;
    this.plugins = config.plugins || []; //Si no viene nada, lo inicia vacio []
    this.initPlugins();
  }
  play() {
    if (this.media.paused) {
      this.media.play();
      this.buttonPlay.innerHTML = "⏸";
    } else {
      this.media.pause();
      this.buttonPlay.innerHTML = "▶";
    }
  }

  mute() {
    if (this.media.muted == true) {
      this.media.muted = false;
      this.buttonMute.innerHTML = "🔇";
    } else {
      this.media.muted = true;
      this.buttonMute.innerHTML = "🔊";
    }
  }

  initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
}

export default MediaPlayer;
