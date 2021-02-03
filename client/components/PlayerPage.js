import React, {useState, useEffect} from 'react'
import {Play, FastForward, Pause} from 'react-feather'
import {connect} from 'react-redux'

const PlayerPage = props => {
  let currentSong = props.album
    ? props.album.tracks.items[0].preview_url
    : 'nothing here'

  const [audio] = useState(new Audio(currentSong))
  const [isPlaying, setPlaying] = useState(false)

  useEffect(
    () => {
      return () => audio.play()
      // isPlaying ? audio.play() : audio.pause();
    },
    [isPlaying]
  )

  const togglePlay = () => setPlaying(!isPlaying)

  return (
    <div className="explore-page-container f jcc">
      <div className="player f jcc aie">
        <audio controls src={currentSong} />
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
