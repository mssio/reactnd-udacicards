import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'app/components'
import Navigation from 'app/navigation'

console.log(Navigation)

export default class App extends React.Component {
  render() {
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
