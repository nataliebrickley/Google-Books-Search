import React from "react"
import "../assets/header.css"
import Search from "../components/Search"
class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>Google Books Search</h1>
                <h2>Search for and Save Books of Interest</h2>
                <Search />           
            </div>
        )
    }
}

export default Header