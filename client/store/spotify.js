import axios from 'axios'

const GET_ALBUM = 'GET_ALBUM'
const GET_TOKEN = 'GET_TOKEN'

const getAlbum = album => ({
  type: GET_ALBUM,
  album
})

const getToken = token => {
  return {
    type: GET_TOKEN,
    token
  }
}

export const fetchToken = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/spotify/token')
      dispatch(getToken(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchAlbum = token => {
  return async dispatch => {
    try {
      console.log(token)
      const {data} = await axios({
        url: 'https://api.spotify.com/v1/albums/',
        method: 'get',
        headers: {
          id: '4aawyAB9vmqN3uQ7FjRGTy',
          Authorization: 'Bearer ' + token
        }
      })
      dispatch(getAlbum(data))
    } catch (error) {
      console.error(error)
    }
  }
}

let initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return action.token
    case GET_ALBUM:
      return action.album
    default:
      return state
  }
}
