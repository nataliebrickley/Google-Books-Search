import React from "react";
import SavedHeader from "../components/SavedHeader"
import Results from "../components/Results"
import API from "../utils/API"

class Saved extends React.Component {
    state = {
        saved: []
    }
    componentDidMount() {
        API.getAllBooks()
           .then(res => {
               this.setState({saved: res.data})
           })
    }
    render() {
        return (
            <div>
                <SavedHeader />
                <Results 
                    books = {this.state.saved}
                    status = "Saved Books:"
                />
            </div>
        )
    }
}

export default Saved