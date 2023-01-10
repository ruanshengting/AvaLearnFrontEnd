const container = document.getElementById('container')
const colors = [
  '#845EC2',
  '#D65DB1',
  '#FF6F91',
  '#FF9671',
  '#FFC75F',
  '#F9F871',
]
const SQUARE = 500
for (let i = 0; i < SQUARE; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
  container.appendChild(square)
}
function setColor(element) {
  const color = getRandomColor()
  console.log('🚀 ~ file: HoverBoard.js:20 ~ setColor ~ color', color)
  element.style.background = color
}
function removeColor(element) {
  console.log('🚀 ~ file: HoverBoard.js:24 ~ removeColor ~ element', element)
  element.style.backgroundColor = '#1d1d1d'
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
