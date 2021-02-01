import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <header>
    <div>
      <h1>Omakase</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">☰</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
