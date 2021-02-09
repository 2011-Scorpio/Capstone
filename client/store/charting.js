import axios from 'axios'

const GET_AUDIO_FEAT = 'GET_AUDIO_FEAT'
const GET_AUDIO_FEAT_PLAYER = 'GET_AUDIO_FEAT_PLAYER'

const getAudioFeat = featArr => ({
  type: GET_AUDIO_FEAT,
  featArr
})

const getAudioFeatPlayer = featArrPlayer => ({
  type: GET_AUDIO_FEAT_PLAYER,
  featArrPlayer
})

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
    default:
      return state
  }
}
