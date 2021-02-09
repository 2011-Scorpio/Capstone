import React from 'react'
import {Link} from 'react-router-dom'
import {User, Menu} from 'react-feather'
import {connect} from 'react-redux'

const Navbar = props => (
  <header>
    <Link to="/" className="no-under">
      <h3 className="navbar-name">Omakase</h3>
    </Link>
    {props.currentPlaylistName ? (
      <div>You're adding to: {props.currentPlaylistName.name}</div>
    ) : (
      ''
    )}
    <nav>
      <ul>
        <li>
          <Link to="/login" className="nav-links f aie">
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

const mapState = state => ({
  currentPlaylistName: state.userPlaylist.currentPlaylist
})

export default connect(mapState)(Navbar)
