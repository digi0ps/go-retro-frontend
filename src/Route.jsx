import React from "react"
import App from "./App"
import { Router } from "@reach/router"
import Board from "./Board"

function Route() {
  return (
    <Router>
      <App path="/" />
      <Board path="board/:boardId" />
    </Router>
  )
}

export default Route
