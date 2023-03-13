const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breathTime = (totalTime / 5) * 2
console.log('🚀 ~ file: script.js:6 ~ breathTime:', breathTime)

const holdTime = totalTime / 5
console.log('🚀 ~ file: script.js:8 ~ holdTime:', holdTime)
function getCurrentTime() {
  const d = new Date()
  const year = d.getYear() < 1900 ? 1900 + d.getYear() : d.getYear()
  const currDateTime =
    '当前日期时间：' +
    year +
    '/' +
    (d.getMonth() + 1) +
    '/' +
    d.getDate() +
    '/ ' +
    d.getHours() +
    ':' +
    d.getMinutes() +
    ':' +
    d.getSeconds()
  return currDateTime
}

breathAnimation()
setInterval(breathAnimation, totalTime)
function breathAnimation() {
  text.innerText = 'Breath In!'
  container.classList = 'container grow'
  setTimeout(() => {
    text.innerText = 'Hold'
    console.log('hold breath', getCurrentTime())
    setTimeout(() => {
      text.innerText = 'Breath Out!'
      container.classList = 'container shrink'
      console.log('Breath Out holdTime', getCurrentTime())
    }, holdTime)
  }, breathTime)
}
