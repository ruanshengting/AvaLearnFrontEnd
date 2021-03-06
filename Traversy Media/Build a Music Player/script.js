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
let songIndex = 2
//Initailly load song info Dom
loadSong(songs[songIndex])
function loadSong(song) {
  console.log(song)
  title.innerHTML = song
  audio.src = `music/${song}.mp3`
  cover.src = `image/${song}.png`
}
function updateProgress(e) {
  const { currentTime, duration } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}
function setProgress(e) {
  const width = this.clientWidth
  const clientX = e.offsetX
  console.log('🚀 setProgress ~ width,clientX', width, clientX)
  const duration = audio.duration
  audio.currentTime = (clientX / width) * duration
}
//event listener
playBtn.addEventListener('click', () => {
  const isPlay = musicContainer.classList.contains('play')
  if (isPlay) {
    pauseSong()
  } else {
    playSong()
  }
})
function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  audio.play()
}
function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  audio.pause()
}
function prevSong() {
  songIndex <= 0 ? (songIndex = songs.length - 1) : songIndex--
  loadSong(songs[songIndex])
  playSong()
}
function nextSong() {
  songIndex >= songs.length - 1 ? (songIndex = 0) : songIndex++
  loadSong(songs[songIndex])
  playSong()
}
//change songs
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', nextSong)

Array.from(document.getElementsByClassName('socialOption'))
const targetDom = [...tempDom.getElementsByClassName('bBody')][0] || ''
Array.from(tempDom.getElementsByClassName('bBody'))[0]
