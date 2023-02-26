const item_container = document.querySelectorAll('.item_container')
for (let i = 0; i < item_container.length; i++) {
  item_container[i].addEventListener('click', function () {
    this.classList.toggle('active')
    /*如果用箭头函数 就没有办法使用this*/
  })
}
