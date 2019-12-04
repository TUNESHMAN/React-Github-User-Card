import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  componentDidMount() {
    this.setState({
      loading: true
    });
    const res = axios
      .get(
        "https://api.github.com/users?8999cb036cee4535f9e864266be4be92762e9098"
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          users: response.data,
          loading: false
        });
      })
      .catch(error => {
        // console.log(error);
      });
  }
  render() {
    return (
      <nav className="navbar bg-primary">
        <NavBar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </nav>
    );
  }
}

export default App;
