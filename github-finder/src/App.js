import React, { Component } from 'react'
import './App.css';
import NavBar from './Components/NavBar'

class App extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <NavBar title="Github Finder" icon="fab fa-github"/>
        {/* <h1>Hello from React</h1> */}

        
      </nav>
    )
  }
}

export default App
