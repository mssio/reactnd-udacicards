import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function DeckShow ({ onAddCard, onShowQuiz }) {
  return (
    <View style={styles.container}>
      <Text>Deck Show</Text>
      <TouchableOpacity onPress={onAddCard}>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onShowQuiz}>
        <Text>Show Quiz</Text>
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
