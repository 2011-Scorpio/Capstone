import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

const NavBar = () => {
  const uncheckCheckbox = () => {
    const checkbox = document.getElementById('nav-toggle')
    checkbox.checked = false
  }
  const {pathname} = useLocation()

  return (
    <header>
      <NavLink to="/" className="no-under">
        <h3 className="navbar-name">Omakase</h3>
      </NavLink>
      <input id="nav-toggle" type="checkbox" className="nav-toggle" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/playlists"
              className="nav-links"
              onClick={() => uncheckCheckbox()}
              isActive={() =>
                ['/explore', '/singleplaylist', '/playlists'].includes(pathname)
              }
            >
              Playlists
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-links"
              onClick={() => uncheckCheckbox()}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="nav-links"
              onClick={() => uncheckCheckbox()}
            >
              Login
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
