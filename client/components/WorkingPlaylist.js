import React from 'react'

export default class WorkingPlaylist extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.render()
    }
  }

  render() {
    const {lastAdded} = this.props
    return (
      <div>
        You just added: {lastAdded.name} by: {lastAdded.artists[0].name}
      </div>
    )
  }
}
