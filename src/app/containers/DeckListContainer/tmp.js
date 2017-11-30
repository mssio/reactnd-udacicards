import { fromJS } from 'immutable'

export const data = fromJS({
  '70c5232c-f036-4fb8-bd0f-4d078c3d690c': {
    uuid: '70c5232c-f036-4fb8-bd0f-4d078c3d690c',
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  '45c419f2-d4a7-450a-9801-e25ec626353c': {
    uuid: '45c419f2-d4a7-450a-9801-e25ec626353c',
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
})
