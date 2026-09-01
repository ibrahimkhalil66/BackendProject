const { Router } = require("express");


const booksRouter = Router();
const { getBookById , getAllBooks} = require("../controllers/bookController");

booksRouter.get("/", getAllBooks);

booksRouter.get("/:booksId", getBookById);


module.exports = booksRouter;