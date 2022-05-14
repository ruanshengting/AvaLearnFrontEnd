const result = document.getElementById('result')
const filter = document.getElementById('searchInput')
const listItems = []
getData()
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=20')
  const { results } = await res.json()
  result.innerHTML = '' //原本ul里面的loading的这个标签去掉
  results.forEach((user) => {
    const li = document.createElement('li')
    listItems.push(li)
    li.innerHTML = `
         <img src=${user.picture.large} />
          <div class="user-info">
            <div class="username">${user.name.first}</div>
            <div class="location">${user.location.city},${user.location.country}</div>
          </div>
       `
    result.appendChild(li)
  })
  console.log('listItems:', listItems)
}
filter.addEventListener('input', (e) => {
  filterData(e.target.value)
})
function filterData(searchText) {
  listItems.filter((item) => {
    console.log('item.innerText.toLowerCase()', item.innerText.toLowerCase())
    if (item.innerText.toLowerCase().includes(searchText.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
