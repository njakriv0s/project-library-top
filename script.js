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
const grid = document.querySelector(".grid-container");


let defaultBook = new Book ("Tolkien", "Lord Of The Rings", 625, crypto.randomUUID());
myLibrary.push(defaultBook);

function createBookCard(book) {

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
grid.appendChild(cardContainer);

const card = document.createElement("div");
card.classList.add("card");
cardContainer.appendChild(card);

// CARD FRONT
const cardFront = document.createElement("div");
cardFront.classList.add("card-front");
card.appendChild(cardFront);

const bookTitle = document.createElement("p");
bookTitle.classList.add("book-title");
bookTitle.textContent = book.title;
cardFront.appendChild(bookTitle);

// CARD BACK
const cardBack = document.createElement("div");
cardBack.classList.add("card-back");
card.appendChild(cardBack);

const bookAuthor = document.createElement("p");
bookAuthor.classList.add("book-author");
bookAuthor.textContent = book.author;
cardBack.appendChild(bookAuthor);

}

createBookCard(defaultBook);



// OPEN MODAL

open.addEventListener("click", (e) => {
    modalContainer.classList.add("show");
})

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = new Book (author.value, title.value, pages.value, read.value, crypto.randomUUID());
    myLibrary.push(book);

    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.textContent = "Hello world";
    grid.appendChild(bookCard);
    console.log(grid);

    author.value = "";
    title.value = "";
    pages.value = "";
    modalContainer.classList.remove("show");
})

// console.log(myLibrary);
