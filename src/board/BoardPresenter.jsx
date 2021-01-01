import React from 'react'

class Presenter extends React.Component {
  render() {
    const { columns, deleteColumnEvent } = this.props
    if (columns === undefined) {
      return ''
    }
    return columns.map(col => (
      <div key={col.id}>
        <b>{col.name}</b>
        <button onClick={() => deleteColumnEvent(col.id)}>Delete Column</button>
        <ul>
          {col.cards.length === 0 ? 'Empty cards' : null}
          {col.cards.map(card => (
            <li key={card.id}>{card.content}</li>
          ))}
        </ul>
        <br />
      </div>
    ))
  }
}

export default Presenter
