import React, {Component} from 'react'
import {Play, FastForward, Pause, Plus} from 'react-feather'
import {connect} from 'react-redux'
import {fetchRPlaylist} from '../store/spotify'
import {me} from '../store'

class PlayerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: true,
      queue: [],
      loaded: false
    }
  }

  async componentDidMount() {
    const {loadInitialData, getRPlaylist} = this.props
    await loadInitialData()
    await getRPlaylist(this.props.token)
    const songsWithUrl = this.props.rPlaylist.tracks.items.filter(
      track => track.preview_url
    )
    this.setState({
      queue: songsWithUrl,
      loaded: true
    })
  }

  async componentDidUpdate() {
    if (this.state.queue.length === 2 && this.state.loaded === true) {
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
    const {queue, loaded} = this.state
    let currentSong = loaded ? queue[0].preview_url : ''
    let artistName = loaded ? queue[0].artists[0].name : ''
    let songName = loaded ? queue[0].name : ''
    console.log('test')

    return (
      <div className="explore-page-container f jcc">
        <div className="player">
          <div>
            <h4>{artistName}</h4>
            <p>{songName}</p>
          </div>
          <audio
            id="player-audio"
            src={currentSong}
            autoPlay
            onEnded={this.fastForward}
          />
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
    rPlaylist: state.spotify.rPlaylist
  }
}

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  getRPlaylist: token => dispatch(fetchRPlaylist(token))
})

export default connect(mapState, mapDispatch)(PlayerPage)
