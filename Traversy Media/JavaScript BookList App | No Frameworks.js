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
    const storeBooks = [
      {
        title: 'Book1',
        author: 'ava',
        isbn: '2333',
      },
      {
        title: 'Book2',
        author: 'rst',
        isbn: '142112333',
      },
    ]
    const books = storeBooks
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
}
//Store Class:Handles Storage
//Event:Display a book
document.addEventListener('DOMContentLoaded', UI.displayBooks)
//Event:Add a Book
document.getElementById('book-form').addEventListener('submit', (e) => {
  //get form value
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const isbn = document.querySelector('#isbn').value
  //Instatiate Book
})
//Eent:Remove a book
