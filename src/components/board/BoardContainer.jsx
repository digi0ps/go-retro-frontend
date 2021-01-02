import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Board from './Board'

function BoardContainer() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  )
}

export default BoardContainer
