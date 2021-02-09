import React, {Component} from 'react'
import {Play, FastForward, Pause, Plus} from 'react-feather'
import {connect} from 'react-redux'
import {fetchAudioFeatPlayer, fetchRPlaylist} from '../store/spotify'
import {me} from '../store'
import {addPlaylist} from '../store/userPlaylist'
import AllPlaylists from './AllPlaylists'
import NowPlaying from './NowPlaying'

class PlayerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlaying: true,
      queue: [],
      loaded: false,
      likedTracks: []
    }

    this.addToPlaylist = this.addToPlaylist.bind(this)
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

  async addToPlaylist() {
    const trackURI = this.state.queue[0].uri
    const trackId = this.state.queue[0].id
    await this.props.addToPlaylist(
      this.props.currentPlaylistId.id,
      trackURI,
      this.props.token
    )
    await this.props.getAudioFeatPlayer(this.props.token, trackId)
  }

  render() {
    const {queue, loaded} = this.state
    let currentSong = loaded ? queue[0].preview_url : ''
    let artistName = loaded ? queue[0].artists[0].name : ''
    let songName = loaded ? queue[0].name : ''
    let albumImg = loaded ? queue[0].album.images[1].url : ''

    return (
      <div>
        <NowPlaying />
        {this.props.currentPlaylistId ? (
          <div className="explore-page-container f jcc">
            <div className="player">
              <h4 className="player-artist player-crop">{artistName}</h4>
              <p className="player-song player-crop">{songName}</p>
              <img src={albumImg} className="player-album-cover" />
              <audio
                id="player-audio"
                src={currentSong}
                autoPlay
                onEnded={this.fastForward}
              />
              <div className="player-buttons">
                <button
                  type="button"
                  className="player-btn f"
                  onClick={this.addToPlaylist}
                >
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
        ) : (
          <div>
            {this.props.isLoggedIn ? (
              <AllPlaylists />
            ) : (
              this.props.history.push('/login')
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    token: state.user.token,
    rPlaylist: state.spotify.rPlaylist,
    currentPlaylistId: state.userPlaylist.currentPlaylist,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(me()),
  getRPlaylist: token => dispatch(fetchRPlaylist(token)),
  addToPlaylist: (playlistId, trackURI, token) =>
    dispatch(addPlaylist(playlistId, trackURI, token)),
  getAudioFeatPlayer: (token, tracks) =>
    dispatch(fetchAudioFeatPlayer(token, tracks))
})

export default connect(mapState, mapDispatch)(PlayerPage)
