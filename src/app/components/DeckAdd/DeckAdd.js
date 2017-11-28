import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DeckAdd () {
  return (
    <View style={styles.container}>
      <Text>Deck Add</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
