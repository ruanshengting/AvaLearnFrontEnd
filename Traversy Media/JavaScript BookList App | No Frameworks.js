//book class:present a book
class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}
//UI class:Handle UI Task
class UI {
  static displayBooks() {
    // const storeBooks = [
    //   {
    //     title: 'Book1',
    //     author: 'ava',
    //     isbn: '2333',
    //   },
    //   {
    //     title: 'Book2',
    //     author: 'rst',
    //     isbn: '142112333',
    //   },
    // ]
    //const books = storeBooks
    const books = Store.getBooks()
    console.log(
      '🚀 ~ file: JavaScript BookList App | No Frameworks.js ~ line 26 ~ UI ~ displayBooks ~ books',
      books,
    )
    books.forEach((book) => {
      UI.addBookToList(book)
    })
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list')
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`
    list.appendChild(row)
  }
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove()
      UI.showAlert('already removed', 'success')
    }
  }
  static clearBook() {
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
  }
  static showAlert(message, className) {
    const div = document.createElement('div')
    div.className = `alert alert-${className}`
    //div.textContent = message
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')

    const form = document.querySelector('#book-form')
    container.insertBefore(div, form) /*Insert div before form*/
    //Vanish in 3 second
    setTimeout(() => document.querySelector('.alert').remove(), 3000)
  }
}
//Store Class:Handles Storage
class Store {
  static getBooks() {
    let books
    if (localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
      console.log(
        `JSON.parse(localStorage.getItem('book')`,
        JSON.parse(localStorage.getItem('books')),
      )
    }
    return books
  }
  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }
  static removeBook(isbn) {
    const books = Store.getBooks()
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books))
  }
}
//Event:Display a book
document.addEventListener('DOMContentLoaded', UI.displayBooks)
//Event:Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault()
  //get form value
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value
  if (title === '' || author === '' || isbn === '') {
    // alert('fill all!')
    UI.showAlert('fill all!', 'danger')
  } else {
    //Instatiate Book
    const book = new Book(title, author, isbn)
    console.log('🚀 ~ ~ book', book)
    //Add book to UI
    UI.addBookToList(book)
    //Add book to store
    Store.addBook(book)
    UI.showAlert('already Added', 'success')
    //clear book
    UI.clearBook()
  }
})
//Eent:Remove a book
document.getElementById('book-list').addEventListener('click', (e) => {
  console.log(e.target.parentElement.previousElementSibling.textContent)
  //remove book from Store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  UI.deleteBook(e.target)
})
