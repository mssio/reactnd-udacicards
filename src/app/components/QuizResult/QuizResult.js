import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { green } from 'app/utils/colors'

export default function QuizResult ({ title, score, maxScore, onStartOver, onBackToDeck }) {
  return (
    <View style={styles.container}>
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>
          {`Your result for ${title} Quiz:`}
        </Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {`${score} out of ${maxScore}`}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Button
          onPress={onStartOver}
          title={'Restart Quiz'}
          backgroundColor="blue"
          style={[styles.buttonAction, { marginBottom: 15 }]} />
        <Button
          onPress={onBackToDeck}
          title={'Back to Deck'}
          backgroundColor="orange"
          style={styles.buttonAction} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  captionText: {
    fontSize: 20,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 30,
    color: green,
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  buttonAction: {
    width: 140,
  },
})
