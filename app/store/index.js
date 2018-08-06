import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import messageReducer from './messageReducer'
import userReducer from './userReducer'
import { channelReducer } from './channelReducer'

const reducer = combineReducers({
  channelReducer,
  messageReducer,
  userReducer
})

const middleware = applyMiddleware(logger, thunkMiddleware)

const store = createStore(reducer, middleware)

export default store;