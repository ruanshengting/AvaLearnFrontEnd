var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
//Add filter
var filter = document.getElementById('filter')
//Form submit event
form.addEventListener('submit', addItem)
//Delete Event
itemList.addEventListener('click', deleteItem)
//Add Filer Event
filter.addEventListener('keyup', filterItems)
//Add Item
function addItem(e) {
  e.preventDefault()
  //Get Input Value
  var newItem = document.getElementById('item').value

  //Create new element li
  var li = document.createElement('li')

  //Add ClassName
  li.className = 'list-group-item'
  //Add text Node with Input Value
  li.appendChild(document.createTextNode(newItem))
  //Create Delete Button
  var button = document.createElement('button')
  button.className = 'btn btn-danger btn-sm float-right delete'
  button.innerHTML = 'X'
  console.log('🚀 addItem ~ button', button)
  li.appendChild(button)
  itemList.appendChild(li)
}
function deleteItem(e) {
  console.log('e.target.classList', e.target.classList)
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}
function filterItems(e) {
  //convert text to lower
  const text = e.target.value.toLowerCase()
  console.log(text)
  //get li tag
  const items = itemList.getElementsByTagName('li')
  //convert to Array
  Array.from(items).forEach((item) => {
    const firstChild = item.firstChild.textContent
    if (firstChild.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}
