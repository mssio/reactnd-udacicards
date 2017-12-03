import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { DeckReducer } from 'app/redux/reducers'

let middlewares = [
  thunk,
]

const store = createStore(
  combineReducers({
    DeckReducer,
  }),
  applyMiddleware(...middlewares)
)

export default store
