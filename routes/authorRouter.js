const { Router } = require("express");


const authorRouter = Router();

const {getAuthorById, getAllAuthors} = require("../controllers/authorController")

authorRouter.get("/", getAllAuthors);

authorRouter.get("/:authorId", getAuthorById);


module.exports = authorRouter;