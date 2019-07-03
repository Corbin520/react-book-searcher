// this will be our main page that gets called when we get to home route "/"

// bring in our imports
import React, { Component } from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/header";
import Title from "../components/title";
import Search from "../components/search";
import API from "../utils/API";
    
// create a class with the state of the page
 class Books extends Component {
 
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };
      
    render() {
        // add the content here that we will render the page with
        return(
        <>
          <Header />
          <Title />
          <Search />
        </>
        )
    }
 }

 export default Books
    // render the <Search /> component which has all our content we need for the search page
        // keep the header and title part on this page as well