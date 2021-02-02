import React from 'react'
import {connect} from 'react-redux'
import {fetchAlbum, fetchToken} from '../store/spotify'

export class WelcomePage extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    this.props.getToken()
  }

  onClick() {
    this.props.getAlbum(this.props.token)
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick}>
          Get Album
        </button>
        <p>
          {console.log('ALBUM', this.props)}
          {this.props.album ? (
            <img
              className="album-art"
              style={{width: '200px', height: '200px'}}
              src={this.props.album.images[0].url}
              alt=""
            />
          ) : (
            <></>
          )}
        </p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    token: state.spotify.token,
    album: state.spotify.album
  }
}

const mapDispatch = dispatch => ({
  getToken: () => dispatch(fetchToken()),
  getAlbum: token => dispatch(fetchAlbum(token))
})

export default connect(mapState, mapDispatch)(WelcomePage)
