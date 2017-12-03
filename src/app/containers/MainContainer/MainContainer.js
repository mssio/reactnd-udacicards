import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading } from 'expo'
import { connect } from 'react-redux'
import { setLocalNotification } from 'app/utils/helpers'
import { handleLoadDecks } from 'app/redux/creators/DeckActionCreators'
import { StatusBar } from 'app/components'

class MainContainer extends Component {
  state = {
    isReady: false,
  }

  componentDidMount () {
    setLocalNotification()
  }

  startLoading = async () => {
    await this.props.handleLoadDecks()
  }

  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.startLoading}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    const { Navigation } = this.props

    return (
      <View style={styles.container}>
        <StatusBar />
        <Navigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default connect(null, {handleLoadDecks})(MainContainer)
