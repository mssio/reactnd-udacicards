import React, { Component } from 'react'
import { QuizShow } from 'app/components'

class QuizShowContainer extends Component {
  handleCorrectGuess = () => {
    const { deck, index } = this.props.navigation.state.params
    const isFinished = index === deck.get('questions').size - 1

    if (isFinished) {
      this._handleShowResult(deck)
    } else {
      this._handleShowNext(deck, index)
    }
  }
  handleIncorrectGuess = () => {
    const { deck, index } = this.props.navigation.state.params
    const isFinished = index === deck.get('questions').size - 1
    
    if (isFinished) {
      this._handleShowResult(deck)
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

  _handleShowResult = (deck) => {
    this.props.navigation.navigate('QuizResult', {
      deck,
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

export default QuizShowContainer
