import React from 'react'

export default class WorkingPlaylist extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.render()
    }
  }

  render() {
    const {addedSoFar} = this.props
    console.log(this.props)
    return (
      <div>
        {addedSoFar.map(track => (
          <div key={track.id}>
            <div>Track name: {track.name}</div>
            <div>Artist: {track.artists[0].name}</div>
          </div>
        ))}
      </div>
    )
  }
}
