import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

class CardAdd extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleChangeQuestion = (value) => {
    this.setState({
      question: value
    })
  }
  handleChangeAnswer = (value) => {
    this.setState({
      answer: value
    })
  }

  handleSubmit = () => {
    const payload = {
      question: this.state.question,
      answer: this.state.answer,
    }
    this.props.onSubmitCard(payload)
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.formGroup, { marginTop: 15 }]}>
          <FormLabel>Question</FormLabel>
          <FormInput
            placeholder='Please enter the question...'
            value={this.state.question}
            onChangeText={this.handleChangeQuestion} />
        </View>
        <View style={styles.formGroup}>
          <FormLabel>Answer</FormLabel>
          <FormInput
            placeholder='Please enter the answer...'
            value={this.state.answer}
            onChangeText={this.handleChangeAnswer} />
        </View>
        <View style={styles.actionContainer}>
          <Button
            onPress={this.handleSubmit}
            title={'Submit'}
            backgroundColor="green"
            buttonStyle={styles.buttonAction} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formGroup: {
    marginBottom: 30,
  },
  actionContainer: {
    alignItems: 'center',
  },
  buttonAction: {
    width: 140,
  },
})

export default CardAdd
