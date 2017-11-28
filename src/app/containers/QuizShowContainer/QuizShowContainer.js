import React, { Component } from 'react'
import { QuizShow } from 'app/components'

class QuizShowContainer extends Component {
  handleNextQuiz = () => {
    this.props.navigation.navigate('QuizShow')
  }

  handleShowResult = () => {
    this.props.navigation.navigate('QuizResult')
  }

  render () {
    return (
      <QuizShow
        onNextQuiz={this.handleNextQuiz}
        onShowResult={this.handleShowResult} />
    )
  }
}

export default QuizShowContainer
