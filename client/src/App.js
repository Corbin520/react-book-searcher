import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Books from "./pages/bookSearch";
import Saved from "./pages/savedBooks";

function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>

    );
  }
export default App;
