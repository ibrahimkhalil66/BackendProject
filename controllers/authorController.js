
const db = require("../db.js")


async function getAuthorById(req, res) {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        res.status(404).json({
            "error": "Author not Found"
        })
        return;
    }

    res.send(`Author name : ${author.name}`)
}

async function getAllAuthors(req, res) {
    const authors = await db.getAllAuthors();


    if (!authors) {
        res.status(404).json({
            "error": "Authors not Found"
        })
        return;
    }

    res.send(authors);

}

module.exports = { getAuthorById, getAllAuthors };