const express = require('express');
const app = express();
const authorRouter = require("./routes/authorRouter");
const booksRouter = require("./routes/booksRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", booksRouter);
app.use("/", indexRouter);




const PORT = 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log(`Server is running on port ${PORT}`);
});