/* eslint-disable max-classes-per-file */
import Book from './book.js';
import LocalStore from './localstore.js';
import MainBody from './mainbody.js';
import { DateTime } from './luxon.js';

const listLink = document.getElementById('list');
const formLink = document.getElementById('add-new');
const contactLink = document.getElementById('contact');
const currentTime = document.getElementById('current-time');

const list = document.getElementById('list-section');
const formSection = document.getElementById('add-new-section');
const contactSection = document.getElementById('contact-section');

formSection.style.display = 'none';
contactSection.style.display = 'none';

listLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
  list.style.display = 'block';
});

formLink.addEventListener('click', () => {
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
  list.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'block';
  list.style.display = 'none';
});

// Event: Display Book
document.addEventListener('DOMContentLoaded', MainBody.displayBook);

// generate id
const generateId = () => `id_${Math.random().toString(36).slice(2)}`;

// Event: add a book
const form = document.querySelector('#book-form');
form.addEventListener('submit', () => {
  const title = document.querySelector('#title-name').value;
  const author = document.querySelector('#author-name').value;
  const id = generateId();
  // instantiate book
  const newBook = new Book({ title, author, id });
  // add book to MainBody
  MainBody.addBookToList(newBook);
  LocalStore.addLocalBook(newBook);
  // clear Field
  document.querySelector('#title-name').value = '';
  document.querySelector('#author-name').value = '';
});

// Event: remove a book

document.querySelector('.book-list').addEventListener('click', (e) => {
  MainBody.removeBook(e.target);
  LocalStore.removeLocalBook(
    // eslint-disable-next-line comma-dangle
    e.target.parentElement.previousElementSibling.textContent
  );
});
// day time
const time = () => {
  currentTime.textContent = DateTime.now().toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};
setInterval(time, 2000);
