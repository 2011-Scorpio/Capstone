import React from 'react'
import Chart from 'chart.js'
import {Radar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchUserPlaylist, fetchAudioFeat} from '../store/spotify'

class RadarChart extends React.Component {
  async componentDidMount() {
    await this.props.getUserPlaylist()
    const trackId = this.props.userTopTracks.map(track => {
      return track.id
    })
    await this.props.audioFeat.map(() => {})
  }

  render() {
    return <div />
  }
}

const mapState = state => ({
  userTopTracks: state.spotify.playlist,
  audioFeat: state.spotify.featArr,
  token: state.user.token
})

const mapDispatch = dispatch => ({
  getUserPlaylist: token => dispatch(fetchUserPlaylist(token)),
  getAudioFeat: token => dispatch(fetchAudioFeat(token))
})

export default connect(mapState, mapDispatch)(RadarChart)
