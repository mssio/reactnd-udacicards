export const LOADING_DECKS = 'LOADING_DECKS'
export const LOADING_DECKS_SUCCESS = 'LOADING_DECKS_SUCCESS'
export const LOADING_DECKS_ERROR = 'LOADING_DECKS_ERROR'

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
  return {
    type: LOADING_DECKS_ERROR,
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
