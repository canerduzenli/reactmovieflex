import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="H-nav">
        <ul>
          <li><NavLink to="/">Movies</NavLink></li>
          <li><NavLink to="/aboutUs">About Us</NavLink></li>
          <li><NavLink to="/myAccount">My Account</NavLink></li>
        </ul>
      </nav>
      <div className="icon one">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Navbar
