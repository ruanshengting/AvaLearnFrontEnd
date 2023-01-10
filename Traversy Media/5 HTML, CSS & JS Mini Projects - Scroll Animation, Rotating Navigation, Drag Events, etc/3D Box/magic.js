const magicButton = document.querySelector('button')
const boxes = document.querySelector('.boxes')
function createBox() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      console.log('🚀 ~ file: magic.js:8 ~ createBox ~ box', box)
      boxes.appendChild(box)
    }
  }
}
createBox()
magicButton.addEventListener('click', function () {
  boxes.classList.toggle('big')
})
