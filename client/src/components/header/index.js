import React from "react"
import "./header.css"

function Header(props) {
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">Google Book Search</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item-search active">
            <a class="nav-link" href="#">Searched <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item-saved active">
            <a class="nav-link" href="#">Saved <span class="sr-only">(current)</span></a>
        </li>
        </ul>
    </div>
    </nav>
    )
}

export default Header