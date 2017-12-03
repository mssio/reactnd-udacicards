import React, { Component } from 'react'
import { KeyboardAvoidingView, View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

class DeckAdd extends Component {
  state = {
    title: '',
  }

  handleChangeTitle = (value, test) => {
    this.setState({
      title: value
    })
  }

  handleSubmit = () => {
    this.props.onSubmitDeck(this.state.title)
  }

  render () {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{'What is the title of your new deck?'}</Text>
          </View>
          <View style={styles.formContainer}>
            <FormLabel>Deck Title</FormLabel>
            <FormInput
              placeholder='Please enter deck title...'
              value={this.state.title}
              onChangeText={this.handleChangeTitle} />
          </View>
          <View style={styles.actionContainer}>
            <Button
              onPress={this.handleSubmit}
              title={'Submit'}
              backgroundColor="green"
              buttonStyle={styles.buttonAction} />
          </View>
        </KeyboardAvoidingView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
    marginLeft: 15,
    marginRight: 15,
  },
  titleText: {
    fontSize: 30,
  },
  formContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  actionContainer: {
    alignItems: 'center',
  },
  buttonAction: {
    width: 140,
  },
})

export default DeckAdd
