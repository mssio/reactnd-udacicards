import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function DeckList ({ onOpenDeck }) {
  return (
    <View style={styles.container}>
      <Text>Deck List</Text>
      <TouchableOpacity onPress={onOpenDeck}>
        <Text>Show Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
