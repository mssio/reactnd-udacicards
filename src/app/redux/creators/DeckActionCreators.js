import {
  loadingDecksSuccess,
  loadingDecksError,
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
        console.log('First Open')
        await handlePersistDecks(JSON.stringify(initialDecks))
        dispatch(loadingDecksSuccess(initialDecks))
      } else {
        // next open
        console.log('Next Open')
        dispatch(loadingDecksSuccess(JSON.parse(decks)))
      }
    } catch (err) {
      dispatch(loadingDecksError(err))
    }
  }
}

export async function handlePersistDecks (decks) {
  return svcSaveDecks(decks)
}

const initialDecks = {
  '70c5232c-f036-4fb8-bd0f-4d078c3d690c': {
    uuid: '70c5232c-f036-4fb8-bd0f-4d078c3d690c',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
        isCorrect: false,
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
        isCorrect: false,
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
        isCorrect: false,
      }
    ]
  }
}
