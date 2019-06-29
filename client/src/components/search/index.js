import React, { useState } from "react"
import "./search.css"
import axios from "axios"

function Search() {

    // hooks
    const [searchTerm, setSearchTerm] = useState("")
    const [books, setBooks] = useState([]);

    function handleSearchClicked(event) {
        event.preventDefault()

        if (searchTerm.trim() === "") {
            alert("You did not search anything")
        }
        else {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(function(response) {
            setBooks(
                response.data.items
            );
        })
        .catch(function (error) {
            console.log(error); }
        )};
    }
    
    return (
        <>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" value={searchTerm} 
                    onChange={(event) =>  setSearchTerm(event.target.value)}
                    id="search-here" aria-describedby="searchHelp" placeholder="Search a book here" />
                </div>
                <button type="submit" className="btn btn-primary" id="submit-button" 
                onClick={handleSearchClicked}>Submit</button>
            </form>

            {/* Card */}
            <div className="card">
                {books.map((book) => (
                    <div key={book.id}>

                        <img src={book.volumeInfo.imageLinks.smallThumbnail || book.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Title: {book.volumeInfo.title}</h5>
                            <p className="card-text">Discription: {book.volumeInfo.description}</p>
                            {/* add subtitle */}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{book.volumeInfo.author || book.volumeInfo.authors}</li>
                        </ul>
                        <button type="button" className="btn btn-secondary btn-lg btn-block" 
                        id="save-button">Save Book</button>
                    </div>
                ))}
        
            </div>
        </>
    )
}
export default Search;