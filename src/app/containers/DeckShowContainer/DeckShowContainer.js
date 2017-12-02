import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startQuiz } from 'app/redux/actions/DeckActions'
import { DeckShow } from 'app/components'

class DeckShowContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck.get('title'),
  })

  handleAddCard = () => {
    this.props.navigation.navigate('CardAdd')
  }

  handleShowQuiz = () => {
    const { deck } = this.props.navigation.state.params

    this.props.startQuiz(deck.get('uuid'))
    this.props.navigation.navigate('QuizShow', {
      deck,
      index: 0
    })
  }

  render () {
    const { deck } = this.props.navigation.state.params
    const isPlayable = deck.get('questions').size > 0

    return (
      <DeckShow
        deck={deck}
        onAddCard={this.handleAddCard}
        onShowQuiz={this.handleShowQuiz}
        isPlayable={isPlayable} />
    )
  }
}

export default connect(null, {startQuiz})(DeckShowContainer)
