const db = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError.js");

async function getBookById(req, res) {
  const { bookId } = req.params;

  try {
    const book = await db.getBookById(Number(bookId));

    if (!book) {
      throw new CustomNotFoundError("Book Not Found");
    }

    res.send(`Book name ${book.name}`);
  } catch (error) {
    console.error("Error retrieving book:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllBooks(req,res) {
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

async function postBook(req, res) {
  const body = req.body;
  try {
    
    if(!body) {
      throw new CustomNotFoundError("Enter Book Name")
    }

    const isAdded = await db.postBook(body.name);

    res.send(isAdded);

  } catch (error) {
    console.error("Error Post the book:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getBookById, getAllBooks, postBook };
