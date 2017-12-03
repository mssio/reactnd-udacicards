import { fromJS } from 'immutable'
import {
  loadingDecksSuccess,
  loadingDecksError,
  creatingDeck,
  creatingDeckSuccess,
  creatingDeckCompleted,
  creatingDeckError,
  creatingCard,
  creatingCardSuccess,
  creatingCardCompleted,
  creatingCardError,
} from '../actions/DeckActions'
import {
  svcLoadDecks,
  svcSaveDecks,
} from '../services/DeckServices'

export function handleLoadDecks () {
  return async function (dispatch) {
    try {
      const decks = await svcLoadDecks()

      if (decks === null) {
        // first open
        await handlePersistDecks(initialDecks)
        dispatch(loadingDecksSuccess(initialDecks))
      } else {
        // next open
        dispatch(loadingDecksSuccess(JSON.parse(decks)))
      }
    } catch (err) {
      dispatch(loadingDecksError(err))
    }
  }
}

export function handleCreateDeck (deck) {
  return async function (dispatch, getState) {
    dispatch(creatingDeck())

    try {
      dispatch(creatingDeckSuccess(fromJS(deck)))
      await handlePersistDecks(getState().DeckReducer.get('decks'))
      dispatch(creatingDeckCompleted())
    } catch (err) {
      dispatch(creatingDeckError(err))
    }
  }
}

export function handleCreateCard (deckUuid, card) {
  return async function (dispatch, getState) {
    dispatch(creatingCard())

    try {
      dispatch(creatingCardSuccess(deckUuid, fromJS(card)))
      await handlePersistDecks(getState().DeckReducer.get('decks'))
      dispatch(creatingCardCompleted())
    } catch (err) {
      dispatch(creatingCardError(err))
    }
  }
}

function handlePersistDecks (decks) {
  return svcSaveDecks(JSON.stringify(decks))
}

const initialDecks = {
  '70c5232c-f036-4fb8-bd0f-4d078c3d690c': {
    uuid: '70c5232c-f036-4fb8-bd0f-4d078c3d690c',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      }
    ]
  },
  '45c419f2-d4a7-450a-9801-e25ec626353c': {
    uuid: '45c419f2-d4a7-450a-9801-e25ec626353c',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      }
    ]
  }
}
