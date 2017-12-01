import React, { Component } from 'react'
import { QuizResult } from 'app/components'

class QuizResultContainer extends Component {
  handleGoHome = () => {
    this.props.navigation.navigate('DeckList')
  }

  render () {
    const { deck } = this.props.navigation.state.params

    const title = deck.get('title')
    const score = 0
    const maxScore = deck.get('questions').size

    return (
      <QuizResult
        title={title}
        score={score}
        maxScore={maxScore}
        onGoHome={this.handleGoHome} />
    )
  }
}

export default QuizResultContainer
