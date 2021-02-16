import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchSinglePlaylist} from '../store/charting'
import {withRouter} from 'react-router-dom'
import {Plus} from 'react-feather'

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
      <div className="sp-container f jcc">
        <div className="sp-card">
          <div className="sp-title-container f jcb aib">
            <span className="sp-title">{this.state.playlistName}</span>
            <button
              type="button"
              onClick={() => this.backToExplore()}
              id="sp-add-button"
            >
              <Plus />
            </button>
          </div>
          <div className="sp-tracklist">
            {this.state.playlist.map((track, i) => (
              <div key={i} className="sp-track-container">
                <div className="sp-artist">{track.track.artists[0].name}</div>
                <div className="sp-track">{track.track.name}</div>
              </div>
            ))}
          </div>
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
