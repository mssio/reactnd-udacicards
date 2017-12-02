export const LOADING_DECKS = 'LOADING_DECKS'
export const LOADING_DECKS_SUCCESS = 'LOADING_DECKS_SUCCESS'
export const LOADING_DECKS_ERROR = 'LOADING_DECKS_ERROR'

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
