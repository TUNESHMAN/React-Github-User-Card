import React, { Component } from "react";

const NavBar = ({icon, title})=> {
   
    return (
        <nav className='navbar bg-primary'>
        <h1>
          <i className= {icon} /> {title}
        </h1>
      </nav>
    );
  
}

export default NavBar;
