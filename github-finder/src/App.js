import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import axios from 'axios';

class App extends Component {
  componentDidMount(){
    axios.get('https://api.github.com/users/')
    .then((response)=>{
      console.log(response.data);
      

    })
    .catch((error)=>{
console.log(error);

    })
  }
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
