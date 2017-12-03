import React from 'react'
import { View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import pluralize from 'pluralize'

export default function DeckList ({ data, onOpenDeck }) {
  return (
    <List>
      {
        data.map((entry, key) => (
          <ListItem
            key={key}
            title={entry.get('title')}
            subtitle={pluralize('card', entry.get('questions').size, true)}
            onPress={() => onOpenDeck(entry.get('uuid'))} />
        ))
      }
    </List>
  )
}
