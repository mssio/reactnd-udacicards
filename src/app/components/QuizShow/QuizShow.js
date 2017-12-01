import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { red } from 'app/utils/colors'

class QuizShow extends Component {
  state = {
    isShowQuestion: true,
    isShowAnswer: false,
  }

  flipCard = () => {
    this.setState((prevState) => ({
      isShowQuestion: !prevState.isShowQuestion,
      isShowAnswer: !prevState.isShowAnswer,
    }))
  }

  render () {
    const {
      onCorrectGuess,
      onIncorrectGuess,
      quiz,
      quizSize,
      quizNo,
    } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.pageNumberContainer}>
          <Text>{`${quizNo}/${quizSize}`}</Text>
        </View>
        {
          this.state.isShowQuestion
            ? (
              <Card containerStyle={styles.cardContainer}>
                <Text style={styles.cardText}>{quiz.get('question')}</Text>
                <TouchableOpacity onPress={this.flipCard}>
                  <Text style={styles.actionText}>Answer</Text>
                </TouchableOpacity>
              </Card>
            )
            : null
        }
        {
          this.state.isShowAnswer
            ? (
              <Card containerStyle={styles.cardContainer}>
                <Text style={styles.cardText}>{quiz.get('answer')}</Text>
                <TouchableOpacity onPress={this.flipCard}>
                  <Text style={styles.actionText}>Question</Text>
                </TouchableOpacity>
              </Card>
            )
            : null
        }
        <View style={styles.actionContainer}>
          <Button
            onPress={onCorrectGuess}
            title={'Correct'}
            backgroundColor="green"
            style={[styles.buttonAction, { marginBottom: 15 }]} />
          <Button
            onPress={onIncorrectGuess}
            title={'Incorrect'}
            backgroundColor="red"
            style={styles.buttonAction} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageNumberContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 15,
  },
  cardContainer: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
  },
  actionText: {
    fontSize: 21,
    color: red,
    textAlign: 'center',
    marginTop: 15,
  },
  actionContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  buttonAction: {
    width: 140,
  },
})

export default QuizShow
