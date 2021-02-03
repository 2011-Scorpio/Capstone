import React from 'react'
import {connect} from 'react-redux'
import {fetchAlbum, fetchRPlaylist, fetchUserPlaylist} from '../store/spotify'

export class WelcomePage extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
    this.onClickPlaylists = this.onClickPlaylists.bind(this)
  }
  componentDidMount() {}

  onClick() {
    this.props.getAlbum(this.props.token)
  }

  onClickPlaylists() {
    this.props.getPlaylist(this.props.token)
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick}>
          Get Album
        </button>
        <button type="button" onClick={this.onClickPlaylists}>
          Get Playlists
        </button>
        <p>
          {this.props.album ? (
            <img
              className="album-art"
              style={{width: '200px', height: '200px'}}
              src={this.props.album.images[0].url}
              alt=""
            />
          ) : (
            <></>
          )}
        </p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    token: state.user.token,
    album: state.spotify.album,
    playlist: state.spotify.playlist
  }
}

const mapDispatch = dispatch => ({
  getAlbum: token => dispatch(fetchAlbum(token)),
  getPlaylist: token => dispatch(fetchRPlaylist(token))
})

export default connect(mapState, mapDispatch)(WelcomePage)
