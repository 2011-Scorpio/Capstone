import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <header>
    <div>
      <Link to="/" className="no-under">
        <h3 className="navbar-name">Omakase</h3>
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/login" className="nav-links">
            Account
          </Link>
        </li>
        <li>
          <a href="#" className="nav-links">
            ☰
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
