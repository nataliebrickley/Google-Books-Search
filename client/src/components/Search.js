import React from "react";


class Search extends React.Component {
    // state = {
    //     books: []
    // }
    // handleSearch = (event) => {
    //     event.preventDefault()
    //     API.getAllBooks()
    //        .then((res) => console.log(res.data))
    //        .catch(err => console.log(err));
    // }
    

    render() {
        return (
            <div>
                <form>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Find a Book"></input>
                        <button className="btn input-group-append" type="submit" onClick={this.props.handleSearch}>Search</button>
                    </div>
                </form>
                {/* <div>
                {this.state.books.map(book => (
                   <p>{book.volumeInfo.title}</p>
                ))}
                </div> */}
            </div>
        )
    }
}

export default Search;