import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchAllPlaylists, setCurrent} from '../store/userPlaylist'
import NewPlaylist from './NewPlaylist'

class AllPlaylists extends React.Component {
  constructor() {
    super()
    this.state = {
      ranOnce: false
    }
    this.setCurrent = this.setCurrent.bind(this)
  }
  async componentDidMount() {
    await this.props.loadUser()
    await this.props.getPlaylists(this.props.token)
    this.setState({
      ranOnce: true
    })
  }

  setCurrent(event) {
    this.props.setCurrentPlaylist(event.target.value)
  }

  render() {
    return (
      <div>
        <div>Please Choose One of Your Playlists:</div>
        {this.state.ranOnce ? (
          <div>
            {this.props.playlists.items.map(playlist => (
              <div key={playlist.id}>
                <button
                  type="button"
                  value={[playlist.name, playlist.id]}
                  onClick={e => this.setCurrent(e)}
                >
                  {playlist.name}
                </button>
              </div>
            ))}
            <NewPlaylist />
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
  getPlaylists: token => dispatch(fetchAllPlaylists(token)),
  setCurrentPlaylist: nameAndId => dispatch(setCurrent(nameAndId))
})
export default connect(mapState, mapDispatch)(AllPlaylists)
