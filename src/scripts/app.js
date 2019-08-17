var music = document.querySelector('audio')
var progressBar = document.querySelector('#progress-bar')
var playButton = document.querySelector('.play-button')
var pauseButton = document.querySelector('.pause-button')
var volumeController = document.querySelector('#volume')

function playMusic (audio) {
  audio.play();
  console.log('test-1-pass'); 
}
function  pauseMusic (audio) {
  audio.pause();
  console.log('test-2-pass'); 
}

function updateProgressBar (progressBar, player) {
  var currentTime = player.currentTime
  var duration = player.duration
  var currentProgress = currentTime / duration
  progressBar.value = currentProgress
}

function updateAudioVolume (controller, music) {
  var value = controller.value
  music.volume = value
}

window.setInterval(function(){
  updateProgressBar(progressBar, music)
}, 500);

// Event Listeners
playButton.addEventListener('click', function () {
  playMusic(music)
})
pauseButton.addEventListener('click', function () {
  pauseMusic(music)
})

volumeController.addEventListener('change', function () {
  updateAudioVolume(volumeController, music)
})