//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
//require models
const db = require("./models");
const PORT = process.env.PORT || 3000;

//initialize express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/book";


mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
        if (err) throw err;
        console.log("database connected")
    })
    .then(() => console.log("Database Connected!"))
    .catch(err => console.log(err));
//Routes
const axios = require("axios")
app.get("/api/books", (req, res) => {
    db.Book
      .find({})
      .then(dbBook => res.json(dbBook))
      .catch(err => res.json(err))
})
app.post("/api/books", (req, res)  => {
    db.Book
      .create(req.body)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.json(err))
})
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
//Listen to port
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`)
});