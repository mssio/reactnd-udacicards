import { AsyncStorage } from 'react-native'

export function svcLoadDecks () {
  return AsyncStorage.getItem('@UdaciCards:decks')
}

export function svcSaveDecks (decks) {
  return AsyncStorage.setItem('@UdaciCards:decks', decks)
}
