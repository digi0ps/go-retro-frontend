import React from 'react'
import Column from './Column'

class Presenter extends React.Component {
  render() {
    const { columns, deleteColumnEvent, updateColumnEvent } = this.props
    if (columns === undefined) {
      return ''
    }
    return columns.map(col => (
      <div key={col.id}>
        <Column
          data={col}
          deleteColumnEvent={deleteColumnEvent}
          updateColumnEvent={updateColumnEvent}
        />

        <br />
      </div>
    ))
  }
}

export default Presenter
