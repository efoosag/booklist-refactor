// Store Class: handle LocalStorage
export default class LocalStore {
  static getLocalBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addLocalBook(book) {
    const books = LocalStore.getLocalBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeLocalBook(id) {
    const books = LocalStore.getLocalBooks();
    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
