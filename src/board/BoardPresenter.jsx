import React from 'react'

class Presenter extends React.Component {
  render() {
    const { columns } = this.props

    return columns.map(col => (
      <div key={col.id}>
        <b>{col.name}</b>
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
