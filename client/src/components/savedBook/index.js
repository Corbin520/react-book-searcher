import React from "react"
import "./savedBook.css"
import axios from "axios";

function SavedBook() {
    
    // function for getting our saved books
    function GetSavedBooks() {
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
    function DeleteBook() {
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
        <div>
            <h1>Saved Books go here</h1>
        </div>
    )
}

export default SavedBook