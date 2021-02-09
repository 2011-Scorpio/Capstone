import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <header>
    <NavLink to="/" className="no-under">
      <h3 className="navbar-name">Omakase</h3>
    </NavLink>
    <input id="nav-toggle" type="checkbox" className="nav-toggle" />
    <nav>
      <ul>
        <li>
          <NavLink to="/login" className="nav-links">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className="nav-links">
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-links">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
    <label htmlFor="nav-toggle" className="nav-toggle-label">
      <span>X</span>
    </label>
  </header>
)

export default Navbar
