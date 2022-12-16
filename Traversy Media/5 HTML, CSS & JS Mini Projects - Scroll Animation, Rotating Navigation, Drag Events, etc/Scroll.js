const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBox)
checkBox()
function checkBox() {
  const triggerPoint = (window.innerHeight / 5) * 4
  console.log('🚀 ~ file: Scroll.js:5 ~ checkBox ~ triggerPoint', triggerPoint)
  boxes.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top
    console.log('🚀 ~ file: Scroll.js:7 ~ boxes.forEach ~ boxTop', boxTop)
    if (boxTop < triggerPoint) {
      item.classList.add('show')
    } else {
      item.classList.remove('show')
    }
  })
}
