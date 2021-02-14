import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

const NowPlaying = props => {
  const history = useHistory()

  const goToSinglePlaylist = () => {
    history.push('/singleplaylist')
  }
  return (
    <>
      {props.currentPlaylistName ? (
        <div className="now-playing">
          You're adding to:{' '}
          <button
            type="button"
            alt={`Go to ${props.currentPlaylistName.name}`}
            onClick={goToSinglePlaylist}
          >
            {props.currentPlaylistName.name}
          </button>
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
