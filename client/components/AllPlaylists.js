import React from 'react'
import {connect} from 'react-redux'
import {fetchAllPlaylists} from '../store/userPlaylist'

class AllPlaylists extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>Listing All Playlists:</div>
        {/* {this.props.playlists.map(playlist => (
          <div key={playlist.id}>
            <div>{playlist.name}</div>
          </div>
        ))} */}
      </div>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  playlists: state.userPlaylist.items
})
const mapDispatch = dispatch => ({
  getPlaylists: token => dispatch(fetchAllPlaylists(token))
})
export default connect(mapState, mapDispatch)(AllPlaylists)
