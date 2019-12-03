import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";

class App extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <NavBar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
      </nav>
    );
  }
}

export default App;
