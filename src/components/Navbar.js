import React from "react"
import "../assets/navbar.css"
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top">
                <span className="navbar-brand mb-0 h1">Google Books Search</span>
            </nav>
        )
    }
};

export default Navbar;