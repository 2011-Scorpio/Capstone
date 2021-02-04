import React from 'react'
import ButtonOne from './ButtonOne'
import {Link} from 'react-router-dom'
import {makePlaylist} from '../store/userPlaylist'
import {connect} from 'react-redux'
import AllPlaylists from './AllPlaylists'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.makePlaylistOnClick = this.makePlaylistOnClick.bind(this)
  }

  makePlaylistOnClick() {
    this.props.createPlaylist(this.props.userId, this.props.token)
  }

  render() {
    return (
      <>
        <div className="landing-img-wrapper">
          <img
            className="landing-img"
            src="https://i.stack.imgur.com/y9DpT.jpg"
            alt=""
          />
          <h3 className="landing-quote">A Simpler Way to Discover Music</h3>
        </div>
        <div>
          New To Omakase? Create a playlist:{' '}
          <button type="button" onClick={this.makePlaylistOnClick}>
            Create
          </button>
          <AllPlaylists />
        </div>
        <div className="landing-btn-container f jcc aic">
          <Link to="/explore">
            <ButtonOne text="Explore" />
          </Link>
        </div>
      </>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  userId: state.user.spotifyId
})

const mapDispatch = dispatch => ({
  createPlaylist: (userId, token) => dispatch(makePlaylist(userId, token))
})

export default connect(mapState, mapDispatch)(LandingPage)
