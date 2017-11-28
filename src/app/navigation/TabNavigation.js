import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { blue, white } from 'app/utils/colors'
import { DeckListContainer, DeckAddContainer } from 'app/containers'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckListContainer,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
    },
  },
  DeckAdd: {
    screen: DeckAddContainer,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add" size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : blue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
})

export default Tabs
