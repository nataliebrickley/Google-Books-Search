import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("/api/books")
    },
    //search google books
    searchBooks: function() {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter")
                
    }
}