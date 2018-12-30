import React, { Component } from "react";
import "./App.css";
import routes from "./routes.js";
import Nav from "./components/Nav/Nav";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        {routes}
      </div>
    );
  }
}

export default App;
