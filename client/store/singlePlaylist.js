import axios from 'axios'

//action type
const GET_PLAYLIST = 'GET_PLAYLIST'

//action creator
export const getPlaylist = playlist => ({type: GET_PLAYLIST, playlist})

//thunk creator
export const fetchSinglePlaylist = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get()
      dispatch(getPlaylist(data))
    } catch (error) {
      console.log('Unable to fetch single playlist', error)
      console.error(error)
    }
  }
}

//initial state
const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST:
      return action.playlist
    default:
      return state
  }
}
