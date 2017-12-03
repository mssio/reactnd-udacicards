import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'
import { handleCreateDeck } from 'app/redux/creators/DeckActionCreators'
import { DeckAdd } from 'app/components'

class DeckAddContainer extends Component {
  handleSubmitDeck = async (deckTitle) => {
    const newDeck = {
      uuid: uuidv4(),
      title: deckTitle,
      questions: [],
    }
    await this.props.handleCreateDeck(newDeck)

    this.props.navigation.navigate('DeckList')
    this.props.navigation.navigate('DeckShow', {
      deckUuid: newDeck.uuid,
      title: newDeck.title,
    })
  }

  render () {
    return this.props.isLoading
      ? <ActivityIndicator style={{marginTop: 30}} />
      : <DeckAdd onSubmitDeck={this.handleSubmitDeck} />
  }
}

function mapStateToProps ({DeckReducer}) {
  return {
    isLoading: DeckReducer.get('isLoading'),
  }
}

export default connect(mapStateToProps, {handleCreateDeck})(DeckAddContainer)
