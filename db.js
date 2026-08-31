const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
];


async function getAuthorById(authorId) {
    return authors.find(a => a.id === authorId);
}
async function getAllAuthors() {
    return authors;
}

module.exports = { getAuthorById, getAllAuthors }