const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
//Song titles
const songs = ['Reverse', 'testMusic', 'You Nuan Chi', 'You']
//Keep track of songs
let songIndex = 3
//Initailly load song info Dom
loadSong(songs[songIndex])
function loadSong(song) {
  console.log(song)
  title.innerHTML = song
  audio.src = `music/${song}.mp3`
  cover.src = `image/${song}.png`
}
