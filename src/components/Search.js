import React from "react";

class Search extends React.Component{
    render() {
        return(
            <form>
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Find a Book"></input>
                <button className="btn input-group-append" type="submit">Search</button>
            </div>
            </form>
        )
    }
}

export default Search;