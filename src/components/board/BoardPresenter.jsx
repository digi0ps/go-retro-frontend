import React from 'react'
import Column from './Column'

class Presenter extends React.Component {
  render() {
    const {
      columns,
      deleteColumnEvent,
      updateColumnEvent,
      addCardAction,
      deleteCardAction,
      editCardAction,
      dropCardAction,
    } = this.props
    if (columns === undefined) {
      return ''
    }
    return columns.map(col => (
      <div key={col.id}>
        <Column
          data={col}
          deleteColumnEvent={deleteColumnEvent}
          updateColumnEvent={updateColumnEvent}
          addCardAction={addCardAction}
          deleteCardAction={deleteCardAction}
          editCardAction={editCardAction}
          dropCardAction={dropCardAction}
        />

        <br />
      </div>
    ))
  }
}

export default Presenter
