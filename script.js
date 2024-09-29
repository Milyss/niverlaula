// Para o controle de música na segunda página
const music = document.getElementById("music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function adjustVolume() {
  const volumeSlider = document.getElementById("volumeSlider");
  music.volume = volumeSlider.value;
}