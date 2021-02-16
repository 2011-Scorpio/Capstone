import React from 'react'
import {connect} from 'react-redux'
import {makePlaylist, fetchAllPlaylists} from '../store/userPlaylist'

class NewPlayList extends React.Component {
  constructor() {
    super()
    this.state = {
      playlistName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      playlistName: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    this.state.playlistName === ''
      ? window.alert('Please enter a name')
      : this.setState({
          playlistName: ''
        })
    if (this.state.playlistName !== '') {
      await this.props.createPlaylist(
        this.props.userId,
        this.props.token,
        this.state.playlistName
      )
      await this.props.getPlaylists(this.props.token)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="playlistName" />
        <div className="new-playlist-pill">
          <input
            className="new-playlist-input"
            type="text"
            name="playlistName"
            onChange={this.handleChange}
            value={this.state.playlistName}
            placeholder="New Playlist"
          />
          <button
            className="new-playlist-button"
            id="button-override"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  userId: state.user.spotifyId
})

const mapDispatch = dispatch => ({
  createPlaylist: (userId, token, playlistName) =>
    dispatch(makePlaylist(userId, token, playlistName)),
  getPlaylists: token => dispatch(fetchAllPlaylists(token))
})

export default connect(mapState, mapDispatch)(NewPlayList)
