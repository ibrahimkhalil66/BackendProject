const db = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError.js");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      throw new CustomNotFoundError("Author Not Found");
    }

    res.send(`Author name : ${author.name}`);
  } catch (error) {
    console.error("Error retrieving author:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllAuthors(req, res) {
  try {
    const authors = await db.getAllAuthors();

    if (!authors) {
      throw new CustomNotFoundError("Authors Not Found");
    }
    res.send(authors);
  } catch (error) {
    console.error("Error retrieving authors:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { getAuthorById, getAllAuthors };
