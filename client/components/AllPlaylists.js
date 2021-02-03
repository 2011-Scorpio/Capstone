import React from 'react'
import {connect} from 'react-redux'
import {fetchAllPlaylists} from '../store/allPlaylists'

export class AllPlaylists extends React.Component {
  render() {
    const {playlists} = this.props
    return (
      <React.Fragment>
        <div>Listing All Playlists:</div>
        {playlists.map(playlist => (
          <div key={playlist.id}>
            <div>Hello world</div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

const mapState = state => ({playlists: state.playlists})
const mapDispatch = dispatch => ({
  getPlaylists: () => dispatch(fetchAllPlaylists())
})
export default connect(mapState, mapDispatch)(AllPlaylists)
