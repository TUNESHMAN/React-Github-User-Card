import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Users from "./Components/Users";
import axios from "axios";
import Search from "./Components/Search";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // I fetched Data from the Github API
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
        console.log(error);
      });
  }
  // Search Github users
  searchUsers = text => {
    // console.log(text);
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&8999cb036cee4535f9e864266be4be92762e9098`
      )
      .then(response => {
        console.log(response.data.items);
        this.setState({
          users: response.data.items,
          loading: false
        });
      })
      .catch();
  };

  // Clear Users from state
  clearUsers = () => 
    this.setState({
      users: [],
      loading: false
    });
  ;
  render() {
    return (
      <nav className="navbar bg-primary">
        <NavBar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </nav>
    );
  }
}

export default App;
