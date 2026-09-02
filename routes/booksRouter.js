const { Router } = require("express");
const express = require("express")
const booksRouter = Router();
const { getBookById, getAllBooks, postBook } = require("../controllers/bookController");


booksRouter.get("/", getAllBooks);

booksRouter.get("/:bookId", getBookById);
booksRouter.use(express.json());
booksRouter.post("/", postBook);

module.exports = booksRouter;
