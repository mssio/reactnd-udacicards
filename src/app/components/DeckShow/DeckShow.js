import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import pluralize from 'pluralize'
import { gray } from 'app/utils/colors'

export default function DeckShow ({ deck, onAddCard, onShowQuiz, isPlayable }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {deck.get('title')}
        </Text>
        <Text style={styles.subTitleText}>
          {pluralize('card', deck.get('questions').size, true)}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Button
          onPress={onAddCard}
          title={'Add Card'}
          backgroundColor="green"
          style={[styles.buttonAction, {marginBottom: 15}]} />
        {
          isPlayable
            ? (
              <Button
                onPress={onShowQuiz}
                title={'Show Quiz'}
                backgroundColor="blue"
                style={styles.buttonAction} />
            )
            : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    marginBottom: 20,
  },
  subTitleText: {
    color: gray,
    fontSize: 20,
  },
  actionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAction: {
    width: 140,
  }
})
