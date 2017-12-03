export const LOADING_DECKS = 'LOADING_DECKS'
export const LOADING_DECKS_SUCCESS = 'LOADING_DECKS_SUCCESS'
export const LOADING_DECKS_ERROR = 'LOADING_DECKS_ERROR'

export const CREATING_DECK = 'CREATING_DECK'
export const CREATING_DECK_SUCCESS = 'CREATING_DECK_SUCCESS'
export const CREATING_DECK_COMPLETED = 'CREATING_DECK_COMPLETED'
export const CREATING_DECK_ERROR = 'CREATING_DECK_ERROR'

export const CREATING_CARD = 'CREATING_CARD'
export const CREATING_CARD_SUCCESS = 'CREATING_CARD_SUCCESS'
export const CREATING_CARD_COMPLETED = 'CREATING_CARD_COMPLETED'
export const CREATING_CARD_ERROR = 'CREATING_CARD_ERROR'

export const START_QUIZ = 'STARTING_QUIZ'
export const GUESS_CORRECT_ANSWER = 'GUESS_CORRECT_ANSWER'
export const GUESS_INCORRECT_ANSWER = 'GUESS_INCORRECT_ANSWER'

export function loadingDecks () {
  return {
    type: LOADING_DECKS,
  }
}
export function loadingDecksSuccess (decks) {
  return {
    type: LOADING_DECKS_SUCCESS,
    decks,
  }
}
export function loadingDecksError (error) {
  console.warn('Loading deck failed', error)
  return {
    type: LOADING_DECKS_ERROR,
    error,
  }
}

export function creatingDeck () {
  return {
    type: CREATING_DECK,
  }
}
export function creatingDeckSuccess (deck) {
  return {
    type: CREATING_DECK_SUCCESS,
    deck,
  }
}
export function creatingDeckCompleted () {
  return {
    type: CREATING_DECK_COMPLETED,
  }
}
export function creatingDeckError (error) {
  console.warn('Creating deck failed', error)
  return {
    type: CREATING_DECK_ERROR,
    error,
  }
}

export function creatingCard () {
  return {
    type: CREATING_CARD,
  }
}
export function creatingCardSuccess (deckUuid, card) {
  return {
    type: CREATING_CARD_SUCCESS,
    deckUuid,
    card,
  }
}
export function creatingCardCompleted () {
  return {
    type: CREATING_CARD_COMPLETED,
  }
}
export function creatingCardError (error) {
  console.warn('Creating card failed', error)
  return {
    type: CREATING_CARD_ERROR,
    error,
  }
}

export function startQuiz (deckUuid) {
  return {
    type: START_QUIZ,
    deckUuid,
  }
}
export function guessCorrectAnswer (deckUuid, questionIndex) {
  return {
    type: GUESS_CORRECT_ANSWER,
    deckUuid,
    questionIndex,
  }
}
export function guessIncorrectAnswer (deckUuid, questionIndex) {
  return {
    type: GUESS_INCORRECT_ANSWER,
    deckUuid,
    questionIndex,
  }
}
