import React from "react"
import "./header.css"

function Header(props) {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">Google Book Search</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item-search active">
            <a className="nav-link" href="#">Searched <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item-saved active">
            <a className="nav-link" href="/saved">Saved <span className="sr-only">(current)</span></a>
        </li>
        </ul>
    </div>
    </nav>
    )
}

export default Header