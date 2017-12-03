import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startQuiz } from 'app/redux/actions/DeckActions'
import { DeckShow } from 'app/components'

class DeckShowContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  })

  handleAddCard = () => {
    this.props.navigation.navigate('CardAdd', {
      deckUuid: this.props.deck.get('uuid'),
    })
  }

  handleShowQuiz = () => {
    this.props.startQuiz(this.props.deck.get('uuid'))
    this.props.navigation.navigate('QuizShow', {
      deck: this.props.deck,
      index: 0
    })
  }

  render () {
    const isPlayable = this.props.deck.get('questions').size > 0

    return (
      <DeckShow
        deck={this.props.deck}
        onAddCard={this.handleAddCard}
        onShowQuiz={this.handleShowQuiz}
        isPlayable={isPlayable} />
    )
  }
}

function mapStateToProps ({DeckReducer}, props) {
  return {
    deck: DeckReducer.get('decks').get(props.navigation.state.params.deckUuid)
  }
}

export default connect(mapStateToProps, {startQuiz})(DeckShowContainer)
