import React, { Component } from 'react'
import { DeckList } from 'app/components'

class DeckListContainer extends Component {
  handleOpenDeck = () => {
    this.props.navigation.navigate('DeckShow')
  }

  render () {
    return (
      <DeckList onOpenDeck={this.handleOpenDeck} />
    )
  }
}

export default DeckListContainer
