import React, { useState } from "react"
import "./search.css"
import axios from "axios"

function Search() {

    // hook
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearchClicked(event) {
        event.preventDefault()
        // find this at axios site + install axios
        axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms")
        // from the website: "https://www.googleapis.com/books/v1/volumes?q=search+terms"
        .then(function(response) {
            console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error); }
        )};
    
    return (
    <form>
        <div className="form-group">

            {/* Target is whatever is whatever caused the event */}
            <input type="text" className="form-control" value={ searchTerm } 
            onChange={(event) =>  setSearchTerm(event.target.value)}
            id="search-here" aria-describedby="emailHelp" placeholder="Search a book here" />

        </div>
        <button type="submit" className="btn btn-primary" id="submit-button" 
        onClick={handleSearchClicked}>Submit</button>
    </form>
    )
}
export default Search