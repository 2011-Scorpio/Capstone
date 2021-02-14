import axios from 'axios'

const GET_AUDIO_FEAT = 'GET_AUDIO_FEAT'
const GET_AUDIO_FEAT_PLAYER = 'GET_AUDIO_FEAT_PLAYER'
const GET_SINGLE_PLAYLIST = 'GET_SINGLE_PLAYLIST'

const getAudioFeat = featArr => ({
  type: GET_AUDIO_FEAT,
  featArr
})

const getAudioFeatPlayer = featArrPlayer => ({
  type: GET_AUDIO_FEAT_PLAYER,
  featArrPlayer
})

const getSinglePlaylist = playlist => ({
  type: GET_SINGLE_PLAYLIST,
  playlist
})

export const fetchSinglePlaylist = (token, playlistId) => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: `https://api.spotify.com/v1/playlists/${playlistId}`,
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      dispatch(getSinglePlaylist(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const fetchAudioFeatPlayer = (token, trackId) => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: 'https://api.spotify.com/v1/audio-features',
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token
        },
        params: {
          ids: trackId.toString()
        }
      })
      dispatch(getAudioFeatPlayer(data.audio_features[0]))
    } catch (error) {
      window.location.replace('/auth/spotify')
      console.error(error)
    }
  }
}

export const fetchAudioFeat = (token, trackId) => {
  return async dispatch => {
    try {
      const {data} = await axios({
        url: '	https://api.spotify.com/v1/audio-features',
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + token
        },
        params: {
          ids: trackId.toString()
        }
      })
      dispatch(getAudioFeat(data))
    } catch (error) {
      window.location.replace('/auth/spotify')
      console.error(error)
    }
  }
}

let initialState = {
  featArrPlayer: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AUDIO_FEAT:
      return {...state, featArr: action.featArr}
    case GET_AUDIO_FEAT_PLAYER:
      return {
        ...state,
        featArrPlayer: [...state.featArrPlayer, action.featArrPlayer]
      }
    case GET_SINGLE_PLAYLIST:
      return {...state, singlePlaylist: action.playlist}
    default:
      return state
  }
}
