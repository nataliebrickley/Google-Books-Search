import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("/api/books")
    },
    //search google books
    searchBooks: function(search) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
                
    }
}