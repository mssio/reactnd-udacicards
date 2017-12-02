import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  guessCorrectAnswer,
  guessIncorrectAnswer,
} from 'app/redux/actions/DeckActions'
import { QuizShow } from 'app/components'

class QuizShowContainer extends Component {
  handleCorrectGuess = () => {
    const { deck, index } = this.props.navigation.state.params
    const isFinished = index === deck.get('questions').size - 1

    this.props.guessCorrectAnswer(deck.get('uuid'), index)

    if (isFinished) {
      this._handleShowResult(deck.get('uuid'))
    } else {
      this._handleShowNext(deck, index)
    }
  }
  handleIncorrectGuess = () => {
    const { deck, index } = this.props.navigation.state.params
    const isFinished = index === deck.get('questions').size - 1

    this.props.guessIncorrectAnswer(deck.get('uuid'), index)

    if (isFinished) {
      this._handleShowResult(deck.get('uuid'))
    } else {
      this._handleShowNext(deck, index)
    }
  }

  _handleShowNext = (deck, index) => {
    this.props.navigation.navigate('QuizShow', {
      deck,
      index: index + 1,
    })
  }

  _handleShowResult = (deckUuid) => {
    this.props.navigation.navigate('QuizResult', {
      deckUuid,
    })
  }

  render () {
    const { deck, index } = this.props.navigation.state.params
    const quiz = deck.get('questions').get(index)


    return (
      <QuizShow
        onCorrectGuess={this.handleCorrectGuess}
        onIncorrectGuess={this.handleIncorrectGuess}
        quiz={quiz}
        quizSize={deck.get('questions').size}
        quizNo={index + 1} />
    )
  }
}

export default connect(null, {guessCorrectAnswer, guessIncorrectAnswer})(QuizShowContainer)
