import React, {useState, useEffect} from 'react'
import {Play, FastForward, Pause} from 'react-feather'
import {connect} from 'react-redux'

const PlayerPage = props => {
  let currentSong = props.album
    ? props.album.tracks.items[0].preview_url
    : 'nothing here'

  const [isPlaying, setPlaying] = useState(false)
  const playerAudio = document.getElementById('player-audio')

  const togglePlay = () => {
    setPlaying(!isPlaying)
    if (isPlaying) {
      playerAudio.pause()
    } else {
      playerAudio.play()
    }
  }

  return (
    <div className="explore-page-container f jcc">
      <div className="player f jcc aie">
        <audio id="player-audio" src={currentSong} />
        <div className="f jcb">
          <button
            className="player-btn f"
            type="button"
            onClick={() => togglePlay()}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
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
