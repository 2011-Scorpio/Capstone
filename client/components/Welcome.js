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
    console.log('props token', this.props.token)
    this.props.getAlbum(this.props.token)
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick}>
          Test
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    token: state.spotify.token
  }
}

const mapDispatch = dispatch => ({
  getToken: () => dispatch(fetchToken()),
  getAlbum: token => dispatch(fetchAlbum(token))
})

export default connect(mapState, mapDispatch)(WelcomePage)
