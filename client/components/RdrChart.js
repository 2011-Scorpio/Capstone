import React from 'react'
import {connect} from 'react-redux'
import {fetchUserPlaylist, fetchAudioFeat} from '../store/spotify'
import {RadarChart} from 'recharts'
import {me} from '../store'

class RdrChart extends React.Component {
  async componentDidMount() {
    await this.props.getUser()
    await this.props.getUserPlaylist(this.props.token)
    const trackId = this.props.userTopTracks.items.map(track => {
      return track.id
    })
    await this.props.getAudioFeat(this.props.token, trackId)
  }

  render() {
    return <RadarChart />
  }
}

const mapState = state => ({
  userTopTracks: state.spotify.playlist,
  audioFeat: state.spotify.featArr,
  token: state.user.token
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me()),
  getUserPlaylist: token => dispatch(fetchUserPlaylist(token)),
  getAudioFeat: (token, tracks) => dispatch(fetchAudioFeat(token, tracks))
})

export default connect(mapState, mapDispatch)(RdrChart)
