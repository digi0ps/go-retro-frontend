import React from 'react'
import App from './App'
import { Router } from '@reach/router'
import BoardContainer from './components/board/BoardContainer'

function Route() {
  return (
    <Router>
      <App path="/" />
      <BoardContainer path="board/:boardId" />
    </Router>
  )
}

export default Route
