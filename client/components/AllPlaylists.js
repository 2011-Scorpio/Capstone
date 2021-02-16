import React from 'react'
import {connect} from 'react-redux'
import {me} from '../store'
import {fetchAllPlaylists, setCurrent} from '../store/userPlaylist'
import BackgroundShape from './BackgroundShape'
import {Plus} from 'react-feather'
import NewPlaylist from './NewPlaylist'
import {withRouter} from 'react-router-dom'

class AllPlaylists extends React.Component {
  constructor() {
    super()
    this.state = {
      ranOnce: false
    }
    this.goToSinglePlaylist = this.goToSinglePlaylist.bind(this)
    this.goToPlayerPage = this.goToPlayerPage.bind(this)
  }
  async componentDidMount() {
    // await this.props.loadUser()
    await this.props.getPlaylists(this.props.token)
    this.setState({
      ranOnce: true
    })
  }

  goToSinglePlaylist(nameAndId) {
    this.props.setCurrentPlaylist(nameAndId)
    this.props.history.push('/singleplaylist')
  }

  goToPlayerPage(nameAndId) {
    this.props.setCurrentPlaylist(nameAndId)
    this.props.history.push('/explore')
  }

  render() {
    return (
      <div className="playlists-container">
        {this.state.ranOnce ? (
          <>
            <h4 className="playlists-title">Playlists</h4>
            <div>
              <NewPlaylist />
              {this.props.playlists.items.map(playlist => (
                <div key={playlist.id} className="single-playlist">
                  <button
                    className="playlist-name"
                    type="button"
                    value={[playlist.name, playlist.id]}
                    onClick={() =>
                      this.goToSinglePlaylist([playlist.name, playlist.id])
                    }
                  >
                    {playlist.name}
                  </button>
                  <button
                    className="playlist-add"
                    type="button"
                    value={[playlist.name, playlist.id]}
                    onClick={() =>
                      this.goToPlayerPage([playlist.name, playlist.id])
                    }
                  >
                    <Plus className="plus-icon" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="playlist-shape">
            <BackgroundShape />
          </div>
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
export default withRouter(connect(mapState, mapDispatch)(AllPlaylists))
