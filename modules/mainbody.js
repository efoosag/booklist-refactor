import LocalStore from './localstore.js';

// MainBody class: Handles MainBody tasks
export default class MainBody {
  // display books
  static displayBook() {
    const books = LocalStore.getLocalBooks();
    books.forEach((book) => MainBody.addBookToList(book));
  }

  // add book
  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.id}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>`;
    list.appendChild(row);
  }

  // remove book
  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
}
