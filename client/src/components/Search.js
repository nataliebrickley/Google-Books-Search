import React from "react";
import API from "../utils/API"

class Search extends React.Component{
    state = {
        books: []
    }
    handleSearch = (event) => {
        event.preventDefault()
        API.getAllBooks()
           .then((res) => console.log(res.data))
           .catch(err => console.log(err));
    }

    render() {
        return(
            <form>
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Find a Book"></input>
                <button className="btn input-group-append" type="submit" onClick={this.handleSearch}>Search</button>
            </div>
            </form>
        )
    }
}

export default Search;