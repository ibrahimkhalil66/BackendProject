const { Router } = require("express");


const indexRouter = Router();

indexRouter.get("/" , (req, res) => res.send("index"))
indexRouter.get("/about" , (req, res) => res.send("about"))
indexRouter.post("/contact" , (req, res) => res.send("contact"))

module.exports = indexRouter;