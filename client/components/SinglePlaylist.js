import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchSinglePlaylist} from '../store/charting'
import {withRouter} from 'react-router-dom'
// import {ArrowLeft} from 'react-feather';

class SinglePlaylist extends React.Component {
  constructor() {
    super()
    this.state = {
      playlist: [],
      playlistName: ''
    }
  }

  async componentDidMount() {
    try {
      await this.props.getSinglePlaylist(
        this.props.token,
        this.props.currentPlaylistId.id
      )
      this.setState({
        playlistName: this.props.playlist.name,
        playlist: this.props.playlist.tracks.items
      })
    } catch (error) {
      this.props.history.push('/playlists')
    }
  }

  backToExplore() {
    this.props.history.push('/explore')
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.backToExplore()}>
          Add to Playlist
        </button>
        <h1>{this.state.playlistName}</h1>
        <div>
          {this.state.playlist.map((track, i) => (
            <div key={i}>
              {track.track.artists[0].name}
              {track.track.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  playlist: state.charting.singlePlaylist,
  currentPlaylistId: state.userPlaylist.currentPlaylist
})

const mapDispatch = dispatch => ({
  loadUser: () => dispatch(me()),
  getSinglePlaylist: (token, playlistId) =>
    dispatch(fetchSinglePlaylist(token, playlistId))
})

export default withRouter(connect(mapState, mapDispatch)(SinglePlaylist))
