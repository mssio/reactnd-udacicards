import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { handleCreateCard } from 'app/redux/creators/DeckActionCreators'
import { CardAdd } from 'app/components'

class CardAddContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card',
  })

  handleSubmitCard = async (card) => {
    const { deckUuid } = this.props.navigation.state.params
    await this.props.handleCreateCard(deckUuid, card)
    this.props.navigation.goBack()
  }

  render () {
    return this.props.isLoading
      ? <ActivityIndicator style={{marginTop: 30}} />
      : <CardAdd onSubmitCard={this.handleSubmitCard} />
  }
}

function mapStateToProps ({DeckReducer}) {
  return {
    isLoading: DeckReducer.get('isLoading'),
  }
}

export default connect(mapStateToProps, {handleCreateCard})(CardAddContainer)
