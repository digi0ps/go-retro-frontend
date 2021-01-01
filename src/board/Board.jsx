import React from 'react'
import * as at from '../redux/actionTypes'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import BoardPresenter from './BoardPresenter'

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

  render() {
    const { columns } = this.props

    return (
      <div>
        <h1>Board</h1>
        <div className="actions">
          <label style={{ display: 'block' }}>Enter Column Name:</label>
          <input
            type="text"
            value={this.state.columnName}
            placeholder="Enter column name"
            onChange={this.handleColumnInput}
          />
          <button onClick={this.handleAddColumnBtn}>ADD COLUMN</button>
        </div>
        <BoardPresenter
          columns={columns}
          deleteColumnEvent={this.handleDeleteColumnBtn}
          updateColumnEvent={this.handleEditColumnBtn}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
