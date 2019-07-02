import React, { Component } from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/header";
import Title from "../components/title";
import API from "../utils/API";
import SavedBook from "./bookSearch";



    class Saved extends Component {
        state = {
            books: [],
            title: "",
            author: "",
            synopsis: ""
        }
        render() {
            return(
                <>
                    <Header />
                    <Title />
                    <SavedBook />
                </>
            )
        }
    }

    export default Saved
