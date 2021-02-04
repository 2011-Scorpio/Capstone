import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import spotify from './spotify'
import allPlaylists from './allPlaylists'
import singlePlaylist from './singlePlaylist'
import userPlaylist from './userPlaylist'

const reducer = combineReducers({user, spotify, userPlaylist, allPlaylists, singlePlaylist})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
