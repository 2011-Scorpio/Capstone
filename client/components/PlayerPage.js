import React, {useState, useRef, useEffect} from 'react'
import {Play, FastForward, Pause} from 'react-feather'
import {connect} from 'react-redux'

const PlayerPage = props => {
  const [isPlaying, setPlaying] = useState(false)

  let currentSong = props.album
    ? props.album.tracks.items[0].preview_url
    : 'nothing here'

  const togglePlay = () => setPlaying(!isPlaying)

  return (
    <div className="explore-page-container f jcc">
      <div className="player f jcc aie">
        <audio id="player control" src={currentSong} />
        <div className="f jcb">
          {/* <li className="player-btn"></li> */}
          <button
            className="player-btn f"
            type="button"
            onClick={() => togglePlay()}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          {/* <li className="player-btn"><FastForward/></li> */}

          {/* <button onclick="document.getElementById('player').pause()">
              Pause
            </button>
            <button onclick="document.getElementById('player').volume += 0.1">
              Vol +
            </button>
            <button onclick="document.getElementById('player').volume -= 0.1">
              Vol -
            </button> */}
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    album: state.spotify.album
  }
}

export default connect(mapState)(PlayerPage)
