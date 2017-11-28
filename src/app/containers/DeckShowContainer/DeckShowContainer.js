import React, { Component } from 'react'
import { DeckShow } from 'app/components'

class DeckShowContainer extends Component {
  static navigationOptions = {
    title: 'New Deck Title',
  }
  
  handleAddCard = () => {
    this.props.navigation.navigate('CardAdd')
  }

  handleShowQuiz = () => {
    this.props.navigation.navigate('QuizShow')
  }

  render () {
    return (
      <DeckShow
        onAddCard={this.handleAddCard}
        onShowQuiz={this.handleShowQuiz} />
    )
  }
}

export default DeckShowContainer
