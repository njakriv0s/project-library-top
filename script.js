const myLibrary = [];

function Book(author, title, pages, read, id) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
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
const closeModalButton= document.getElementById("close-modal-button");



let defaultBook = new Book ("Tolkien", "Lord Of The Rings", 625, true, crypto.randomUUID());
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
    bookAuthor.classList.add("card-back-text");
    bookAuthor.textContent = `Author: ${book.author}`;
    cardBack.appendChild(bookAuthor);

    const bookTitleBack = document.createElement("p");
    bookTitleBack.classList.add("card-back-text");
    bookTitleBack.textContent = `Title: ${book.title}`;
    cardBack.appendChild(bookTitleBack);

    const bookPages = document.createElement("p");
    bookPages.classList.add("card-book-text")
    bookPages.textContent = `Pages: ${book.pages}`
    cardBack.appendChild(bookPages);
    
    const bookID = document.createElement("p");
    bookID.classList.add("card-book-text")
    bookID.textContent = `Book ID: ${book.id}`
    cardBack.appendChild(bookID);

    const deleteBook = document.createElement("button");
    deleteBook.id = "delete-book";
    deleteBook.textContent = "Delete Book";
    cardBack.appendChild(deleteBook);

    deleteBook.addEventListener("click", (e) => {
        let index = myLibrary.findIndex((b) => b.id === book.id);
        cardContainer.remove();
        myLibrary.splice(index, 1);
        console.log(myLibrary);
    })
    

}
createBookCard(defaultBook);

// OPEN MODAL

open.addEventListener("click", (e) => {
    modalContainer.classList.add("show");
})

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let book = new Book (author.value, title.value, pages.value, read.checked, crypto.randomUUID());
    myLibrary.push(book);

    createBookCard(book);

    author.value = "";
    title.value = "";
    pages.value = "";
    modalContainer.classList.remove("show");
    
})

closeModalButton.addEventListener("click", (e) => {
    modalContainer.classList.remove("show");
})

console.log(myLibrary);
