import React, { Component } from 'react'
import { connect } from 'react-redux'
import { QuizResult } from 'app/components'

class QuizResultContainer extends Component {
  handleGoHome = () => {
    this.props.navigation.navigate('DeckList')
  }

  render () {
    const title = this.props.deck.get('title')
    const score = this.props.deck.get('questions').reduce(function (value, question) {
      if (question.get('isCorrect')) {
        return value + 1
      } else {
        return value
      }
    }, 0)
    const maxScore = this.props.deck.get('questions').size

    return (
      <QuizResult
        title={title}
        score={score}
        maxScore={maxScore}
        onGoHome={this.handleGoHome} />
    )
  }
}

function mapStateToProps ({ DeckReducer }, props) {
  return {
    deck: DeckReducer.get('decks').get(props.navigation.state.params.deckUuid)
  }
}

export default connect(mapStateToProps)(QuizResultContainer)
