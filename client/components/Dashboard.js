import React from 'react'
import {connect} from 'react-redux'
import RdrChart from './RdrChart'

import {fetchAudioFeat} from '../store/charting'
import {fetchUserPlaylist} from '../store/spotify'
import {me} from '../store'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      top15: []
    }
  }

  async componentDidMount() {
    await this.props.getUserPlaylist(this.props.token)
    const trackId = this.props.userTopTracks.map(track => {
      return track.id
    })
    await this.props.getAudioFeat(this.props.token, trackId)
    this.setState({
      top15: this.props.audioFeat.audio_features
    })
  }

  render() {
    return (
      <div className="dashboard">
        <RdrChart title="Your Taste This Month" props={this.state.top15} />
      </div>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  userTopTracks: state.spotify.playlist,
  audioFeat: state.charting.featArr
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me()),
  getUserPlaylist: token => dispatch(fetchUserPlaylist(token)),
  getAudioFeat: (token, tracks) => dispatch(fetchAudioFeat(token, tracks))
})

export default connect(mapState, mapDispatch)(Dashboard)
