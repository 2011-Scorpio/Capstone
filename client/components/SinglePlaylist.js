import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchAudioFeat, fetchSinglePlaylist} from '../store/charting'
import {withRouter} from 'react-router-dom'
import {Plus} from 'react-feather'
import RdrChart from './RdrChart'

class SinglePlaylist extends React.Component {
  constructor() {
    super()
    this.state = {
      playlist: [],
      playlistName: '',
      playlistFeat: [],
      loaded: false
    }
  }

  async componentDidMount() {
    try {
      await this.props.getSinglePlaylist(
        this.props.token,
        this.props.currentPlaylistId.id
      )

      const trackId = this.props.playlist.tracks.items.map(track => {
        return track.track.id
      })
      await this.props.getAudioFeat(this.props.token, trackId)

      this.setState({
        playlistName: this.props.playlist.name,
        playlist: this.props.playlist.tracks.items,
        playlistFeat: this.props.audioFeat.audio_features,
        loaded: true
      })
    } catch (error) {
      this.props.history.push('/playlists')
    }
  }

  backToPlaylists() {
    this.props.history.push('/playlists')
  }

  backToExplore() {
    this.props.history.push('/explore')
  }

  render() {
    return (
      <div className="sp-container">
        <div className={`sp-card ${this.state.loaded ? 'fadeone' : 'empty'}`}>
          <div className="sp-title-container f jcb aib">
            <span className="sp-title">
              <button
                id="sp-title-button"
                type="button"
                onClick={() => this.backToPlaylists()}
              >
                {this.state.playlistName}
              </button>
            </span>
            <button
              type="button"
              onClick={() => this.backToExplore()}
              id="sp-add-button"
            >
              <Plus />
            </button>
          </div>
          {this.state.playlist.length > 0 ? (
            <div className="sp-tracklist fadeone">
              {this.state.playlist.map((track, i) => (
                <div key={i} className="sp-track-container">
                  <div className="sp-artist">{track.track.artists[0].name}</div>
                  <div className="sp-track">{track.track.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {this.state.loaded && this.state.playlist.length === 0 ? (
                <div className="no-tracks-in-playlist f jcc aic">
                  Your playlist is empty!
                </div>
              ) : (
                ''
              )}
            </>
          )}
        </div>
        <RdrChart props={this.state.playlistFeat} className="fadeone" />
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
