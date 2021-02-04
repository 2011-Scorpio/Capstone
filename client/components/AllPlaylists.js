import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchAllPlaylists} from '../store/userPlaylist'

class AllPlaylists extends React.Component {
  constructor() {
    super()
    this.state = {
      ranOnce: false
    }
  }
  async componentDidMount() {
    await this.props.loadUser()
    await this.props.getPlaylists(this.props.token)
    this.setState({
      ranOnce: true
    })
  }

  render() {
    return (
      <div>
        <div>Listing All Playlists:</div>
        {this.state.ranOnce ? (
          <div>
            {this.props.playlists.items.map(playlist => (
              <div key={playlist.id}>
                <div>{playlist.name}</div>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

const mapState = state => ({
  token: state.user.token,
  playlists: state.userPlaylist.allUserPlaylists
})
const mapDispatch = dispatch => ({
  loadUser: () => dispatch(me()),
  getPlaylists: token => dispatch(fetchAllPlaylists(token))
})
export default connect(mapState, mapDispatch)(AllPlaylists)
