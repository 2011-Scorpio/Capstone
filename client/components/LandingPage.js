import React from 'react'
import ButtonOne from './ButtonOne'
import {Link} from 'react-router-dom'
import {makePlaylist, fetchAllPlaylists} from '../store/userPlaylist'
import {connect} from 'react-redux'
import {ChevronDown} from 'react-feather'
import AllPlaylists from './AllPlaylists'
import Footer from './Footer'

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
          <h3 className="landing-quote">A Simpler Way to Discover Music</h3>
        </div>
        <div className="chevron-container f jcc">
          <ChevronDown
            className="chevron-down"
            onClick={() =>
              window.scrollTo({
                top: 400,
                behavior: 'smooth'
              })
            }
          />
        </div>
        {/* {this.props.isLoggedIn ? (
          <div>
            New To Omakase? Create a playlist:{' '}
            <button type="button" onClick={this.makePlaylistOnClick}>
              Create
            </button>
            <AllPlaylists />
          </div>
        ) : (
          <div>
            Please <a href="/login">log in</a>
          </div>
        )} */}
        <div className="landing-btn-container glass f jcc aic">
          <Link to="/login">
            <ButtonOne text="Explore" />
          </Link>
        </div>
        <Footer />
      </>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  userId: state.user.spotifyId,
  isLoggedIn: !!state.user.id
})

const mapDispatch = dispatch => ({
  createPlaylist: (userId, token) => dispatch(makePlaylist(userId, token)),
  getPlaylists: token => dispatch(fetchAllPlaylists(token))
})

export default connect(mapState, mapDispatch)(LandingPage)
