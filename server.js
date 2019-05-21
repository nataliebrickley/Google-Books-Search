//Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
//require models
const db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
        if (err) throw err;
        console.log("database connected")
    })
    .then(() => console.log("Database Connected!"))
    .catch(err => console.log(err));
// Define API routes here

//get all books from db
app.get("/api/books", (req, res) => {
  db.Book
    .find({})
    .then(dbBook => res.json(dbBook))
    .catch(err => res.json(err))
})
//save a book to db
app.post("/api/books", (req, res)  => {
  db.Book
    .create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.json(err))
})
//delete a book from db /api/books/:id


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
