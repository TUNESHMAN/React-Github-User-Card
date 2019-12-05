import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
  
    return (
      <div>
        <form className="form" onSubmit={event => this.onSubmit(event)}>
          <input
            type="text"
            placeholder="Search Users...."
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
        </form>
        {this.propsshowClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
