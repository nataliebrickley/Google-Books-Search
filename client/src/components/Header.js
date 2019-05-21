import React from "react"
import "../assets/header.css"
import Search from "../components/Search"
class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <h1>Google Books Search</h1>
                <h2>Search for and Save Books of Interest</h2>
                <form>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Find a Book"></input>
                        <button className="btn input-group-append" type="submit" onClick={this.props.handleSearch}>Search</button>
                    </div>
                </form>          
            </div>
        )
    }
}

export default Header