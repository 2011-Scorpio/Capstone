import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchAudioFeat, fetchSinglePlaylist} from '../store/charting'
import {withRouter} from 'react-router-dom'
import RdrChart from './RdrChart'
// import {ArrowLeft} from 'react-feather';

class SinglePlaylist extends React.Component {
  constructor() {
    super()
    this.state = {
      playlist: [],
      playlistName: '',
      playlistFeat: []
    }
  }

  async componentDidMount() {
    try {
      await this.props.getSinglePlaylist(
        this.props.token,
        this.props.currentPlaylistId.id
      )
      // this.setState({

      // })

      const trackId = this.props.playlist.tracks.items.map(track => {
        return track.track.id
      })
      console.log(trackId)
      await this.props.getAudioFeat(this.props.token, trackId)

      this.setState({
        playlistName: this.props.playlist.name,
        playlist: this.props.playlist.tracks.items,
        playlistFeat: this.props.audioFeat.audio_features
      })
    } catch (error) {
      //this.props.history.push('/playlists')
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
        <RdrChart props={this.state.playlistFeat} />
      </div>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  playlist: state.charting.singlePlaylist,
  currentPlaylistId: state.userPlaylist.currentPlaylist,
  audioFeat: state.charting.featArr
})

const mapDispatch = dispatch => ({
  loadUser: () => dispatch(me()),
  getSinglePlaylist: (token, playlistId) =>
    dispatch(fetchSinglePlaylist(token, playlistId)),
  getAudioFeat: (token, tracks) => dispatch(fetchAudioFeat(token, tracks))
})

export default withRouter(connect(mapState, mapDispatch)(SinglePlaylist))
