import axios from "axios";

export default {
  //get books from the database
  getAllBooks: function () {
    return axios.get("/api/books")
  },
  //save a book to the database
  saveBook: function (title, authors, description, image, link) {
    return axios.post(`/api/books/${title}/${authors}/${description}/${image}/${link}`)
  },
  //search google books
  searchBooks: function (search) {
    return axios.get(`/search/${search}`)
  }
}