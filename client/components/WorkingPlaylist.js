import React from 'react'

const WorkingPlaylist = props => {
  console.log(props)
  const {addedSoFar} = props
  return (
    <div>
      {addedSoFar.map(track => (
        <div key={track.id}>
          <div>Track name: {track.name}</div>
        </div>
      ))}
    </div>
  )
}

export default WorkingPlaylist
