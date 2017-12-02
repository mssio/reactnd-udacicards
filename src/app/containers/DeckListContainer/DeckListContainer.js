import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeckList } from 'app/components'

class DeckListContainer extends Component {
  handleOpenDeck = (deckId) => {
    this.props.navigation.navigate('DeckShow', {
      deck: this.props.decks.get(deckId),
    })
  }

  render () {
    return (
      <DeckList
        data={this.props.decks.valueSeq()}
        onOpenDeck={this.handleOpenDeck} />
    )
  }
}

function mapStateToProps ({ DeckReducer }) {
  return {
    decks: DeckReducer.get('decks'),
  }
}

export default connect(mapStateToProps)(DeckListContainer)
