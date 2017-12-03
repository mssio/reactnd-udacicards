import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from 'app/utils/helpers'
import { startQuiz } from 'app/redux/actions/DeckActions'
import { QuizResult } from 'app/components'

class QuizResultContainer extends Component {
  componentDidMount () {
    clearLocalNotification()
    setLocalNotification(true)
  }

  handleStartOver = () => {
    this.props.startQuiz(this.props.deck.get('uuid'))
    this.props.navigation.navigate('QuizShow', {
      deck: this.props.deck,
      index: 0
    })
  }
  handleBackToDeck = () => {
    this.props.navigation.navigate('DeckList')
    this.props.navigation.navigate('DeckShow', {
      deckUuid: this.props.deck.get('uuid'),
      title: this.props.deck.get('title'),
    })
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
        onStartOver={this.handleStartOver}
        onBackToDeck={this.handleBackToDeck} />
    )
  }
}

function mapStateToProps ({ DeckReducer }, props) {
  return {
    deck: DeckReducer.get('decks').get(props.navigation.state.params.deckUuid)
  }
}

export default connect(mapStateToProps, {startQuiz})(QuizResultContainer)
