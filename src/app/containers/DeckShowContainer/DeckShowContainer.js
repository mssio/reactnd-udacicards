import React, { Component } from 'react'
import { DeckShow } from 'app/components'

class DeckShowContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck.get('title'),
  })

  handleAddCard = () => {
    this.props.navigation.navigate('CardAdd')
  }

  handleShowQuiz = () => {
    this.props.navigation.navigate('QuizShow')
  }

  render () {
  const { deck } = this.props.navigation.state.params
    return (
      <DeckShow
        deck={deck}
        onAddCard={this.handleAddCard}
        onShowQuiz={this.handleShowQuiz} />
    )
  }
}

export default DeckShowContainer
