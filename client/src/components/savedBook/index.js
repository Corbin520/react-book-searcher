import React from "react"
import "./savedBook.css"
import axios from "axios";

function SavedBook(event) {
    
    // function for getting our saved books
    function GetSavedBooks(book) {
        console.log("GetSavedBooks function firing off")
        axios.get("/saved", {
            
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: null,
            author: book.volumeInfo.authors[0],
            // link: null,
            discription: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.smallThumbnail,
        }).then(function(response) {
            console.log("this is your response: " + response)

        }).catch(function (err) {
            console.log("this is your error" + err)
        })
    }

    // function for deleting books
    function deleteBook() {
        console.log("Deleted Book Function firing off")
        axios.delete("", {

        }).then(function(response) {
            console.log("this is your response: " + response)

        }).catch(function (err) {
            console.log("this is your error" + err)
        })
    }

    return(

        // Build out the card in here
            // get all the stored info for the card
            // change the button to delete + call the delete function (onChange)
            // we need to .map() over the deleteBook response
        <div>
            <div className="savedBookCard card">
                <img src="addImage" className="savedBook-image" alt="" />
                <div className="savedBook-card-body">
                    <h5 className="savedBook-title">Title: </h5>
                    <p className="savedBook-discription">Discription: </p>
                    <p className="savedBook-author">Author:</p>
                    <button type="button" className="btn btn-danger btn-lg btn-block" onClick={deleteBook}>Delete Book</button>
                </div>
            </div>
        </div>
    
    )
}

export default SavedBook