import React, { Component } from 'react'
import { DeckAdd } from 'app/components'

class DeckAddContainer extends Component {
  handleSubmitDeck = (deckTitle) => {
    console.log('New Deck Submitted:', deckTitle)
    this.props.navigation.navigate('DeckList')
  }

  render () {
    return (
      <DeckAdd
        onSubmitDeck={this.handleSubmitDeck} />
    )
  }
}

export default DeckAddContainer
