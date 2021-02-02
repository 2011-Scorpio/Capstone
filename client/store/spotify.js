import axios from 'axios'

const GET_ALBUM = 'GET_ALBUM'
const GET_PLAYLIST = 'GET_PLAYLIST'

const getAlbum = album => ({
  type: GET_ALBUM,
  album
})

const getUserPlaylist = playlist => ({
  type: GET_PLAYLIST,
  playlist
})

export const fetchAlbum = token => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy',
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      dispatch(getAlbum(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchUserPlaylist = token => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: 'https://api.spotify.com/v1/me/top/tracks',
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      dispatch(getUserPlaylist(data))
    } catch (error) {
      console.error(error)
    }
  }
}

let initialState = {
  token: null,
  album: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM:
      return {...state, album: action.album}
    case GET_PLAYLIST:
      return {...state, playlist: action.playlist}
    default:
      return state
  }
}
