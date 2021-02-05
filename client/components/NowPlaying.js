import React from 'react'
import {connect} from 'react-redux'

const NowPlaying = props => {
  return (
    <>
      {props.currentPlaylistName ? (
        <div className="now-playing">
          You're adding to: <strong>{props.currentPlaylistName.name}</strong>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

const mapState = state => ({
  currentPlaylistName: state.userPlaylist.currentPlaylist
})

export default connect(mapState)(NowPlaying)
