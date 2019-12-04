import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };

  onChange = (e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit =(e)=>{
      e.preventDefault()
      console.log(this.state.text);
      
  }
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}

export default Search;
