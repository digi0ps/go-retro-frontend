import React from 'react'
import * as at from '../../redux/actionTypes'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import BoardPresenter from './BoardPresenter'

export class Board extends React.Component {
  state = {
    columnName: '',
  }

  handleColumnInput = e => {
    this.setState({ columnName: e.target.value })
  }

  // handleCardInput = (e, id) => {
  //   this.setState({ colID: id })
  //   if (e.target.name === this.state.colID) {
  //     console.log('inside if', id)
  //     this.setState({ cardContent: e.target.value })
  //   }
  // }

  // handleAddCarnBtn = colId => {
  //   const cardContent = this.state.cardContent.trim()
  //   if (colId === this.state.colID) {
  //     console.log(cardContent)
  //   }

  //   this.setState({ cardContent: '' })
  // }

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

  render() {
    const { columns, addCard, deleteCard, editCard } = this.props

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
        <BoardPresenter
          columns={columns}
          deleteColumnEvent={this.handleDeleteColumnBtn}
          updateColumnEvent={this.handleEditColumnBtn}
          addCardAction={addCard}
          deleteCardAction={deleteCard}
          editCardAction={editCard}
        />
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
