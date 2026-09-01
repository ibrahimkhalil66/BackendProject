const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
];
const books = [
    { id: 1, name: "Learn Java" },
    { id: 2, name: "Learn Python" },
    { id: 3, name: "Learn Js" },
];


async function getAuthorById(authorId) {
    return authors.find(a => a.id === authorId);
}
async function getAllAuthors() {
    return authors;
}

async function getBookById(bookId) {
    return books.find( b => b.id === bookId );
}
async function getAllBooks() {
    return books;
}

module.exports = { getAuthorById, getAllAuthors, getBookById, getAllBooks }