import React from 'react'
import {connect} from 'react-redux'
import RdrChart from './RdrChart'

import {fetchAudioFeat} from '../store/charting'
import {fetchUserPlaylist} from '../store/spotify'
import {me} from '../store'

class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.getUser()
    await this.props.getUserPlaylist(this.props.token)
    const trackId = this.props.userTopTracks.items.map(track => {
      return track.id
    })
    await this.props.getAudioFeat(this.props.token, trackId)
  }

  render() {
    return (
      <div>
        <RdrChart props={this.props.audioFeat} />
      </div>
    )
  }
}

const mapState = state => ({
  userTopTracks: state.spotify.playlist,
  audioFeat: state.charting.featArr
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me()),
  getUserPlaylist: token => dispatch(fetchUserPlaylist(token)),
  getAudioFeat: (token, tracks) => dispatch(fetchAudioFeat(token, tracks))
})

export default connect(mapState, mapDispatch)(Dashboard)
