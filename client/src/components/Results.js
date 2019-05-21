import React from "react";

class Results extends React.Component {
    state = {
        books: []
    }
    componentWillReceiveProps() {
        this.setState({
            books: this.props.books
        })
        console.log(this.state)
    }
    render() {
        return(
            <div className="results">
                <h1>Results</h1>
                <div>
                {this.state.books.map(book => (
                   <p>{book.volumeInfo.title}</p>
                ))}
                </div> 
            </div>
        )
    }
};

export default Results;