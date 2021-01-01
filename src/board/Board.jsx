import React from 'react'
import * as at from '../redux/actionTypes'
import * as actions from '../redux/actions'
import { connect } from 'react-redux'
import BoardPresenter from './BoardPresenter'

class Board extends React.Component {
  addColumn = () => {
    // TODO: Get this value from input and make it dynamic
    this.props.addColumn('Test')
  }

  render() {
    const { columns, addColumn } = this.props
    console.log('REDUX STATE: ', columns)
    return (
      <div>
        <h1>Board</h1>
        <div className="actions">
          <button onClick={this.addColumn}>ADD COLUMN</button>
        </div>
        <BoardPresenter columns={columns} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  columns: state.columns,
})

const mapDispatchToProps = {
  addColumn: actions.addColumn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
/*
const connect=(mapStateToProps,mapStateToProps)=> {
  return (component)=> {
    return component(return value from mapStateToProps,return value from mapDispatchToProps)
    // The return of mapStateToProps and mapStateToProps to the component will be a closure la ?

  }
  }
}

const connected=connect(mapStateToProps,mapDispatchToProps)
connected(component)

or

connect(mapStateToProps,mapDispatchToProps)(component)

*/
