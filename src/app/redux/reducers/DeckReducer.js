import {
  LOADING_DECKS_SUCCESS,
  LOADING_DECKS_ERROR,
  CREATING_DECK,
  CREATING_DECK_SUCCESS,
  CREATING_DECK_COMPLETED,
  CREATING_DECK_ERROR,
  CREATING_CARD,
  CREATING_CARD_SUCCESS,
  CREATING_CARD_COMPLETED,
  CREATING_CARD_ERROR,
  START_QUIZ,
  GUESS_CORRECT_ANSWER,
  GUESS_INCORRECT_ANSWER,
} from '../actions/DeckActions'
import { Map } from 'immutable'

const initialState = Map({
  isLoading: false,
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
    case CREATING_DECK:
      return state.merge({
        isLoading: true,
      })
    case CREATING_DECK_SUCCESS:
      return state.merge({
        decks: state.get('decks').merge({
          [action.deck.get('uuid')]: action.deck
        })
      })
    case CREATING_DECK_COMPLETED:
      return state.merge({
        isLoading: false,
      })
    case CREATING_DECK_ERROR:
      return state.merge({
        isLoading: false,
        error: action.error,
      })
    case CREATING_CARD:
      return state.merge({
        isLoading: true,
      })
    case CREATING_CARD_SUCCESS:
      return state.merge({
        decks: state.get('decks').merge({
          [action.deckUuid]: state.get('decks').get(action.deckUuid).merge({
            questions: state.get('decks')
              .get(action.deckUuid)
              .get('questions')
              .push(action.card)
          })
        })
      })
    case CREATING_CARD_COMPLETED:
      return state.merge({
        isLoading: false,
      })
    case CREATING_CARD_ERROR:
      return state.merge({
        isLoading: false,
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
