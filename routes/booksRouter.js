const { Router } = require("express");


const booksRouter = Router();

booksRouter.get("/", (req, res) => res.send("All books"));

booksRouter.get("/:booksId", (req, res) => {
    const { booksId } = req.params;

    res.send(`Books ID : ${booksId}`)
});


module.exports = booksRouter;