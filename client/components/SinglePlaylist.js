import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchSinglePlaylist} from '../store/charting'

class SinglePlaylist extends React.Component {
  constructor() {
    super()
    this.state = {
      playlist: [],
      playlistName: ''
    }
  }
  async componentDidMount() {
    await this.props.getSinglePlaylist(
      this.props.token,
      this.props.currentPlaylistId.id
    )
    this.setState({
      loaded: true,
      playlistName: this.props.playlist.name,
      playlist: this.props.playlist.tracks.items
    })
  }

  render() {
    console.log(this.state.playlist)
    return (
      <div>
        <h1>{this.state.playlistName}</h1>
        <div>
          {this.state.playlist.map((track, i) => (
            <div key={i}>
              {track.track.artists[0].name}
              {track.track.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  playlist: state.charting.singlePlaylist,
  currentPlaylistId: state.userPlaylist.currentPlaylist
})

const mapDispatch = dispatch => ({
  loadUser: () => dispatch(me()),
  getSinglePlaylist: (token, playlistId) =>
    dispatch(fetchSinglePlaylist(token, playlistId))
})

export default connect(mapState, mapDispatch)(SinglePlaylist)
