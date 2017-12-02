import {
  LOADING_DECKS_SUCCESS,
  LOADING_DECKS_ERROR,
  START_QUIZ,
  GUESS_CORRECT_ANSWER,
  GUESS_INCORRECT_ANSWER,
} from '../actions/DeckActions'
import { Map } from 'immutable'

const initialState = Map({
  error: '',
  decks: Map({}),
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
    case START_QUIZ:
      return state.merge({
        decks: state.get('decks').merge({
          [action.deckUuid]: state.get('decks').get(action.deckUuid).merge({
            questions: state.get('decks')
              .get(action.deckUuid)
              .get('questions')
              .map((question) => question.set('isCorrect', false))
          }),
        })
      })
    case GUESS_CORRECT_ANSWER:
      return state.merge({
        decks: state.get('decks').merge({
          [action.deckUuid]: state.get('decks').get(action.deckUuid).merge({
            questions: state.get('decks')
              .get(action.deckUuid)
              .get('questions')
              .map((question, index) => {
                if (index === action.questionIndex) {
                  return question.set('isCorrect', true)
                } else {
                  return question
                }
              })
          }),
        })
      })
    case GUESS_INCORRECT_ANSWER:
      return state.merge({
        decks: state.get('decks').merge({
          [action.deckUuid]: state.get('decks').get(action.deckUuid).merge({
            questions: state.get('decks')
              .get(action.deckUuid)
              .get('questions')
              .map((question, index) => {
                if (index === action.questionIndex) {
                  return question.set('isCorrect', false)
                } else {
                  return question
                }
              })
          }),
        })
      })
    default:
      return state
  }
}
