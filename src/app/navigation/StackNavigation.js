import { StackNavigator } from 'react-navigation'
import TabNavigation from './TabNavigation'
import {
  DeckShowContainer,
  CardAddContainer,
  QuizShowContainer,
  QuizResultContainer,
} from 'app/containers'
import { white, blue } from 'app/utils/colors'

const Stacks = StackNavigator({
  Home: {
    screen: TabNavigation,
  },
  DeckShow: {
    screen: DeckShowContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  QuizShow: {
    screen: QuizShowContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  QuizResult: {
    screen: QuizResultContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  CardAdd: {
    screen: CardAddContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
})

export default Stacks
