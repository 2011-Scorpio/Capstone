export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AUDIO_FEAT:
      return {...state, featArr: action.featArr}
    case GET_AUDIO_FEAT_PLAYER:
      return [...state, action.featArrPlayer]
    default:
      return state
  }
}
