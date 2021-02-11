import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchAllPlaylists, setCurrent} from '../store/userPlaylist'
import BackgroundShape from './BackgroundShape'
import {Plus} from 'react-feather'
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
      <div className="playlists-container">
        <h4 className="playlists-title">
          Please Choose From One of Your Playlists
        </h4>
        {this.state.ranOnce ? (
          <div>
            {this.props.playlists.items.reverse().map(playlist => (
              <div key={playlist.id} className="single-playlist">
                <button
                  className="playlist-name"
                  type="button"
                  value={[playlist.name, playlist.id]}
                  onClick={e => this.setCurrent(e)}
                >
                  {playlist.name}
                </button>
                <button
                  className="playlist-add"
                  type="button"
                  value={[playlist.name, playlist.id]}
                  onClick={e => this.setCurrent(e)}
                >
                  <Plus />
                </button>
              </div>
            ))}
            <NewPlaylist />
          </div>
        ) : (
          <BackgroundShape />
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
