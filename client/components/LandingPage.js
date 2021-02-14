import React from 'react'
import ButtonOne from './ButtonOne'
import {Link} from 'react-router-dom'
import {makePlaylist, fetchAllPlaylists} from '../store/userPlaylist'
import {connect} from 'react-redux'
import {ChevronDown} from 'react-feather'
import Dashboard from './Dashboard'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.makePlaylistOnClick = this.makePlaylistOnClick.bind(this)
  }

  async makePlaylistOnClick() {
    await this.props.createPlaylist(this.props.userId, this.props.token)
    await this.props.getPlaylists(this.props.token)
  }

  render() {
    return (
      <>
        <div className="landing-top-block-wrapper">
          {this.props.isLoggedIn ? (
            <div>
              <h3>Your taste this month:</h3>
              <Dashboard />
            </div>
          ) : (
            <h3 className="landing-quote">A Simpler Way to Discover Music</h3>
          )}
        </div>
        <div className="chevron-container f jcc">
          <ChevronDown
            className="chevron-down"
            onClick={() =>
              window.scrollTo({
                top: 500,
                behavior: 'smooth'
              })
            }
          />
        </div>

        {this.props.isLoggedIn ? (
          <div>
            <div className="landing-btn-container glass f jcc aic">
              <Link to="/explore">
                <ButtonOne text="Explore" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="landing-btn-container glass f jcc aic">
            <Link to="/login">
              <ButtonOne text="Explore" />
            </Link>
          </div>
        )}
      </>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  userId: state.user.spotifyId,
  isLoggedIn: !!state.user.token
})

const mapDispatch = dispatch => ({
  createPlaylist: (userId, token) => dispatch(makePlaylist(userId, token)),
  getPlaylists: token => dispatch(fetchAllPlaylists(token))
})

export default connect(mapState, mapDispatch)(LandingPage)
