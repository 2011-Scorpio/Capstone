import React from 'react'
import {Link} from 'react-router-dom'
import {User, Menu} from 'react-feather'

const Navbar = () => (
  <header>
    <Link to="/" className="no-under">
      <h3 className="navbar-name">Omakase</h3>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/login" className="nav-links">
            <User />
          </Link>
        </li>
        <li>
          <button type="button" className="nav-links">
            <Menu />
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
