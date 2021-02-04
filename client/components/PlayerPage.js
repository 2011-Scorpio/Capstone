import React, {Component} from 'react'
import {Play, FastForward, Pause, Plus} from 'react-feather'
import {connect} from 'react-redux'
import {fetchRPlaylist} from '../store/spotify'
import {me} from '../store'

class PlayerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: false,
      queue: [],
      loaded: false
    }
  }

  async componentDidMount() {
    await this.props.loadInitialData()
    await this.props.getRPlaylist(this.props.token)
    const songsWithUrl = this.props.rPlaylist.tracks.items.filter(
      track => track.preview_url
    )
    this.setState({
      queue: songsWithUrl,
      loaded: true
    })
  }

  async componentDidUpdate() {
    if (this.state.queue.length === 3 && this.state.loaded === true) {
      this.setState({loaded: false})
      await this.props.getRPlaylist(this.props.token)
      const songsWithUrl = this.props.rPlaylist.tracks.items.filter(
        track => track.preview_url !== null
      )
      this.setState({
        queue: songsWithUrl,
        loaded: true
      })
    }
  }

  fastForward = () => {
    this.setState(prevState => ({
      queue: prevState.queue.slice(1)
    }))
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
    let currentSong = this.state.loaded ? this.state.queue[0].preview_url : ''
    let artistName = this.state.loaded
      ? this.state.queue[0].artists[0].name
      : ''
    console.log(artistName)

    return (
      <div className="explore-page-container f jcc">
        <div className="player">
          <h4>{artistName}</h4>
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
            <button
              type="button"
              className="player-btn f"
              onClick={() => this.fastForward()}
            >
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
    rPlaylist: state.spotify.rPlaylist
  }
}

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  getRPlaylist: token => dispatch(fetchRPlaylist(token))
})

export default connect(mapState, mapDispatch)(PlayerPage)
