var music = document.querySelector('audio')
var artistName = document.getElementsByClassName('song-artist')
var songName = document.getElementsByClassName('song-title')
var musicCover = document.getElementsByClassName('song-cover')

// Controle
var progressBar = document.querySelector('#progress-bar')
var playButton = document.querySelector('.play-button')
var pauseButton = document.querySelector('.pause-button')
var volumeController = document.querySelector('#volume')
var nextButton = document.querySelector('.next-button')
var previousButton = document.querySelector('.previous-button')
var songNumber = 0

// data
var musicList = [
  {
    artist: 'David Bowie',
    song: 'Modern Love',
    source: './assets/audio/David Bowie - Modern Love.mp3',
    cover: './assets/img/David Bowie - Modern Love.jpg'
  },
  {
    artist: 'Wham!',
    song: 'Everything She Wants',
    source: './assets/audio/Wham! - Everything She Wants.mp3',
    cover: './assets/img/Wham! - Everything She Wants.jpg'
  },
  {
    artist: 'Persona 5',
    song: 'Last Surprise',
    source: './assets/audio/Persona 5 - Last Surprise.mp3',
    cover: './assets/img/Persona 5 - Last Surprise.jpg'
  }
]

// Functions
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

function updateSong(musicList, currentSong, artistName, songName, musicCover) {
  artistName.innerHtml = musicList[songNumber].artist
  songName.innerHtml = musicList[songNumber].song
  currentSong.src = musicList[songNumber].source
  musicCover.src = musicList[songNumber].cover
}

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

nextButton.addEventListener('click', function () {
  ++songNumber
  updateSong(musicList, music, artistName, songName, musicCover)
  playMusic(music)
})

previousButton.addEventListener('click', function () {
  --songNumber
  updateSong(musicList, music, artistName, songName, musicCover)
  playMusic(music)
})

updateSong(musicList, music, artistName, songName, musicCover)