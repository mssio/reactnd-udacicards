import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function QuizShow ({ onNextQuiz, onShowResult }) {
  return (
    <View style={styles.container}>
      <Text>Quiz Show</Text>
      <TouchableOpacity onPress={onNextQuiz}>
        <Text>
          Next Question
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onShowResult}>
        <Text>
          Finish
        </Text>
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
