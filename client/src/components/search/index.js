import React, { useState } from "react"
import "./search.css"
import axios from "axios"

function Search() {

    // hook
    const [searchTerm, setSearchTerm] = useState("")
    const [books, setBooks] = useState([]);

    function handleSearchClicked(event) {
        event.preventDefault()
        // find this at axios site + install axios
        // searchTerm.trim() is "" then don't make request
        axios.get("https://www.googleapis.com/books/v1/volumes?q=dog")
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        // from the website: "https://www.googleapis.com/books/v1/volumes?q=search+terms"
        .then(function(response) {
            setBooks(
                response.data.items
            );
        })
        .catch(function (error) {
            // handle error
            console.log(error); }
        )};
    
    return (
        <>
            <form>
                <div className="form-group">
                    {/* Target is whatever is whatever caused the event */}
                    <input type="text" className="form-control" value={searchTerm} 
                    onChange={(event) =>  setSearchTerm(event.target.value)}
                    id="search-here" aria-describedby="searchHelp" placeholder="Search a book here" />
                </div>
                <button type="submit" className="btn btn-primary" id="submit-button" 
                onClick={handleSearchClicked}>Submit</button>
            </form>
            <ul>
                {console.log(books)}
                {books.map((book) => (
                    <li key={book.id}>
                        <p>{book.volumeInfo.title}</p>
                        {/* <p>{subtitle}</p> */}
                        <p>{book.volumeInfo.author || book.volumeInfo.authors}</p>
                        {/* <p>{description}</p> */}
                        {/* <p>{image}</p> */}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Search;