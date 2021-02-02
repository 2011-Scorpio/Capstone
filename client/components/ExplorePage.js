import React from 'react'
import {Play, FastForward} from 'react-feather'

const ExplorePage = () => {
  const playSong = () => {}

  return (
    <div className="explore-page-container f jcc">
      <audio src="" />
      <div className="player f jcc aie">
        <div className="f jcb">
          {/* <li className="player-btn"></li> */}
          <button
            className="player-btn f"
            type="button"
            onClick={() => playSong()}
          >
            <Play />
          </button>
          {/* <li className="player-btn"><FastForward/></li> */}
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
