import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import store from 'app/redux/store'
import { StatusBar } from 'app/components'
import Navigation from 'app/navigation'
import { MainContainer } from 'app/containers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer Navigation={Navigation}/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
