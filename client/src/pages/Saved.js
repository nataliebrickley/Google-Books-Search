import React from "react";
import SavedHeader from "../components/SavedHeader"
import Results from "../components/Results"
import API from "../utils/API"

class Saved extends React.Component {
    state = {
        saved: [],
        btnColor: {background: 'red'} 
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
                    buttonText = "Delete"
                    buttonColor = {this.state.btnColor}
                />
            </div>
        )
    }
}

export default Saved