import axios from 'axios'

//action type
const GET_ALL_PLAYLISTS = 'GET_ALL_PLAYLISTS'

//action creator
export const getAllPlaylists = playlists => ({
  type: GET_ALL_PLAYLISTS,
  playlists
})

//thunk creator
export const fetchAllPlaylists = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get()
      dispatch(getAllPlaylists(data))
    } catch (error) {
      console.log('Unable to fetch all playlists', error)
      console.error(error)
    }
  }
}

//initial state
const initialState = []

//reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLAYLISTS:
      state = action.playlists
      return state
    default:
      return state
  }
}
