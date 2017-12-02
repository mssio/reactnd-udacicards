import {
  LOADING_DECKS_SUCCESS,
  LOADING_DECKS_ERROR,
} from '../actions/DeckActions'
import { Map } from 'immutable'

const initialState = Map({
  error: '',
  decks: Map({}),
  score: 0,
})

export default function DeckReducer (state = initialState, action) {
  switch (action.type) {
    case LOADING_DECKS_SUCCESS:
      return state.merge({
        decks: action.decks,
      })
    case LOADING_DECKS_ERROR:
      return state.merge({
        error: action.error,
      })
    default:
      return state
  }
}
