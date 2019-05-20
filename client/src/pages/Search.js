import React from "react";
import Header from "../components/Header"
import Results from "../components/Results"

class Search extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Results />
            </div>
        )
    }
}

export default Search