import React from 'react'

import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import BoardPresenter from './BoardPresenter'

import './board.css'

export class Board extends React.Component {
  state = {
    columnName: '',
  }

  handleColumnInput = e => {
    this.setState({ columnName: e.target.value })
  }

  handleAddColumnBtn = () => {
    const columnName = this.state.columnName.trim()
    if (columnName.length !== 0) {
      this.props.addColumn(this.state.columnName)
    }
    this.setState({ columnName: '' })
  }

  handleDeleteColumnBtn = id => {
    this.props.deleteColumn(id)
  }

  handleEditColumnBtn = (editedColumnName, id) => {
    this.props.editColumn(editedColumnName, id)
  }

  // CURRYING 
  handleDeleteCard = (colId, cardId) => s() =>
    this.props.deleteCard(colId, cardId)

  render() {
    const { columns, addCard, editCard } = this.props

    return (
      <div>
        <h1>Board</h1>
        <div className="actions">
          <label style={{ display: 'block' }}>Enter Column Name:</label>
          <input
            type="text"
            value={this.state.columnName}
            placeholder="Enter column name"
            // name="columnName"
            onChange={this.handleColumnInput}
          />
          <button onClick={this.handleAddColumnBtn}>ADD COLUMN</button>
        </div>
        <div className="board">
          <BoardPresenter
            columns={columns}
            deleteColumnEvent={this.handleDeleteColumnBtn}
            updateColumnEvent={this.handleEditColumnBtn}
            addCardAction={addCard}
            deleteCardAction={this.handleDeleteCard}
            editCardAction={editCard}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  columns: state.columns,
})

const mapDispatchToProps = {
  addColumn: actions.addColumn,
  deleteColumn: actions.deleteColumn,
  editColumn: actions.editColumn,
  addCard: actions.addCards,
  deleteCard: actions.deleteCards,
  editCard: actions.editCards,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
