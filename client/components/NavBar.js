import React from 'react'
import {NavLink} from 'react-router-dom'
import BackgroundShape from './BackgroundShape'

const NavBar = () => {
  const toggleCheckbox = () => {
    const checkbox = document.getElementById('nav-toggle')
    checkbox.checked = !checkbox.checked
  }

  return (
    <header>
      <NavLink to="/" className="no-under">
        <h3 className="navbar-name">Omakase</h3>
      </NavLink>
      <input id="nav-toggle" type="checkbox" className="nav-toggle" />
      <div id="logo">
        <BackgroundShape />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/login"
              className="nav-links"
              onClick={() => toggleCheckbox()}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className="nav-links"
              onClick={() => toggleCheckbox()}
            >
              Playlists
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-links"
              onClick={() => toggleCheckbox()}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span />
      </label>
    </header>
  )
}

export default NavBar
