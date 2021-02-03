import React, {Component} from 'react'
import {Play, FastForward, Pause, Plus} from 'react-feather'
import {connect} from 'react-redux'
import {fetchUserPlaylist} from '../store/spotify'

class PlayerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      playQueue: []
    }
  }

  componentDidMount() {
    this.props.getPlaylist(this.props.token)
  }

  togglePlay = () => {
    const playerAudio = document.getElementById('player-audio')
    this.setState(state => {
      return {isPlaying: !state.isPlaying}
    })
    if (this.state.isPlaying) {
      playerAudio.pause()
    } else {
      playerAudio.play()
    }
  }
  render() {
    let currentSong = this.props.album
      ? this.props.album.tracks.items[0].preview_url
      : ''
    return (
      <div className="explore-page-container f jcc">
        <div className="player f jcc aie">
          <audio id="player-audio" src={currentSong} />
          <div className="f jcb">
            <button type="button" className="player-btn f">
              <Plus />
            </button>
            <button
              className="player-btn f"
              type="button"
              onClick={() => this.togglePlay()}
            >
              {this.state.isPlaying ? <Pause /> : <Play />}
            </button>
            <button type="button" className="player-btn f">
              <FastForward />
            </button>
          </div>
        </div>
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
  getPlaylist: token => dispatch(fetchUserPlaylist(token))
})

export default connect(mapState, mapDispatch)(PlayerPage)
