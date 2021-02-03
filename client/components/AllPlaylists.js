import React from 'react'
import {connect} from 'react-redux'
import {fetchAllPlaylists} from '../store/allPlaylists'

export class AllPlaylists extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Listing All Playlists:</div>
      </React.Fragment>
    )
  }
}

const mapState = state => ({playlists: state.playlists})
const mapDispatch = dispatch => ({
  getPlaylists: () => dispatch(fetchAllPlaylists())
})
export default connect(mapState, mapDispatch)(AllPlaylists)
