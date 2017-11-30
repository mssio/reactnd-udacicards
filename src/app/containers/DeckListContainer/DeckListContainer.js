import React, { Component } from 'react'
import { DeckList } from 'app/components'
import { data } from './tmp'

class DeckListContainer extends Component {
  handleOpenDeck = (deckId) => {
    console.log('Entry opened:', deckId)
    this.props.navigation.navigate('DeckShow', {
      deck: data.get(deckId),
    })
  }

  render () {
    return (
      <DeckList
        data={data.valueSeq()}
        onOpenDeck={this.handleOpenDeck} />
    )
  }
}

export default DeckListContainer
