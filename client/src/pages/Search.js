import React from "react";
import Header from "../components/Header"
import Results from "../components/Results"
import API from "../utils/API"
class Search extends React.Component {
    state={
        books: [],
        search: "",
        status: "Search for a Book!"
    }
    handleSearch = (search) => {
        API.searchBooks(search)
            .then(res => {
                this.setState({ books: res.data, status: "Search Results:" })
                console.log(this.state) 
                console.log(res)
            })
    }
    updateInput = (event) => {
        this.setState({
            search: event.target.value
        }) 
    }
    componentWillUnmount() {
        API.deleteAllUnsaved()
    }
    render() {
        return (
            <div>
                <Header 
                handleSearch = {this.handleSearch}
                search = {this.state.search}
                updateInput = {this.updateInput}
                />
                <Results 
                books = {this.state.books}
                status = {this.state.status}
                />
            </div>
        )
    }
}

export default Search