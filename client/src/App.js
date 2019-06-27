import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Title from "./components/title";
import Card from "./components/card";
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Title />
            <Search />
      </div>
    );
  }
}

export default App;
