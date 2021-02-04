import axios from 'axios'

const CREATE_PLAYLIST = 'CREATE_PLAYLIST'
const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST'

const createPlaylist = playlistId => ({
  type: CREATE_PLAYLIST,
  playlistId
})

const addToPlaylist = trackId => ({
  type: ADD_TO_PLAYLIST,
  trackId
})

export const makePlaylist = (userId, token) => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: `https://api.spotify.com/v1/users/${userId}/playlists`,
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          name: 'Omakase'
        }
      })
      dispatch(createPlaylist(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addPlaylist = (playlistId, trackURI, token) => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + token
        },
        params: {
          uris: trackURI
        }
      })
      dispatch(addToPlaylist(data))
    } catch (error) {
      console.error(error)
    }
  }
}

let initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYLIST:
      return action.playlistId
    case ADD_TO_PLAYLIST:
      return action.trackId
    default:
      return state
  }
}
