//Dependencies
const express = require("express");
const mongoose = require("mongoose");

//require models
const db = require("./models");
const PORT = process.env.PORT || 3000;

//initialize express
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";


mongoose.connect(MONGODB_URI, { useNewUrlParser: true}, (err) => {
    if (err) throw err;
    console.log("database connected")
});
//Routes
app.get("/", (req, res) => {
    db.Book
      .find({})
      .then(dbBook => {
          res.json(dbBook)
      })
})
//Listen to port
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`)
});