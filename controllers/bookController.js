const db = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError.js");

async function getBookById(res, req) {
  const { bookId } = req.params;

  try {
    const book = await db.getBookById(bookId);

    if (!book) {
      throw new CustomNotFoundError("Book Not Found");
    }

    res.send(`Book name ${book.name}`);
  } catch (error) {
    console.error("Error retrieving book:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllBooks() {
  try {
    const books = await db.getAllBooks();

    if (!books) {
      throw new CustomNotFoundError("Books Not Found");
    }

    res.send(books);
  } catch (error) {
    console.error("Error retrieving books:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getBookById, getAllBooks }
