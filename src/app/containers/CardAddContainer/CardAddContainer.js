import React, { Component } from 'react'
import { CardAdd } from 'app/components'

class CardAddContainer extends Component {
  handleSubmitCard = (card) => {
    console.log('New card logged:', card)
    this.props.navigation.goBack()
  }

  render () {
    return (
      <CardAdd
        onSubmitCard={this.handleSubmitCard} />
    )
  }
}

export default CardAddContainer
