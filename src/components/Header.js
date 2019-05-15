import React from "react"
import "../assets/header.css"
class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </div>
        )
    }
}

export default Header