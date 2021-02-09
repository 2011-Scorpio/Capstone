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

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      playlistName: ''
    })
    this.props.createPlaylist(
      this.props.userId,
      this.props.token,
      this.state.playlistName
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="playlistName">Enter Playlist Name:</label>
        <input
          type="text"
          name="playlistName"
          onChange={this.handleChange}
          value={this.state.playlistName}
        />
        <button type="submit">Create</button>
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
