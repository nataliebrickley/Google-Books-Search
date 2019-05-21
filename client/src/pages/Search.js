import React from "react";
import Header from "../components/Header"
import Results from "../components/Results"
import API from "../utils/API"
class Search extends React.Component {
    state={
        books: []
    }
    handleSearch = (event) => {
        event.preventDefault()
        API.searchBooks()
            .then(res => {
                this.setState({ books: res.data.items })
                console.log(this.state)
                
            })
    }
    render() {
        return (
            <div>
                <Header 
                handleSearch = {this.handleSearch}
                />
                <Results 
                books = {this.state.books}
                />
            </div>
        )
    }
}

export default Search