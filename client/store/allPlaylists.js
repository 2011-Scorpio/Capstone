import axios from 'axios'

//action type
const GET_ALL_PLAYLISTS = 'GET_ALL_PLAYLISTS'

//action creator
export const getAllPlaylists = playlists => ({
  type: GET_ALL_PLAYLISTS,
  playlists
})

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
