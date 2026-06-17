const myLibrary = [];

function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = id;
}


const open = document.querySelector("#open");
const close = document.querySelector("#close");
const modalContainer = document.querySelector("#modal-container");
const bookForm = document.querySelector("#book-form");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

// OPEN MODAL

open.addEventListener("click", (e) => {
    modalContainer.classList.add("show");
})

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = new Book (author.value, title.value, pages.value);
    myLibrary.push(book);
    console.log(myLibrary);
    modalContainer.classList.remove("show");
    modalContainer.remove();
})

