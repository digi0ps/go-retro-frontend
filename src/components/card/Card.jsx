import React from 'react'
import CardInput from './CardInput'

class Card extends React.Component {
  handleDeleteCardBtn = id => {
    this.props.deleteCardAction(this.props.colId, id)
  }

  render() {
    const {
      cardData,
      colId,
      addCardAction,
      deleteCardAction,
      editCardAction,
    } = this.props
    return (
      <div style={{ border: 'solid 1px teal' }}>
        <CardInput
          colId={colId}
          addCardAction={addCardAction}
          editCardAction={editCardAction}
        />

        <ul>
          {cardData.cards.length === 0 ? 'Empty cards' : null}
          {cardData.cards.map(card => (
            <div key={card.id}>
              <li>{card.content}</li>
              <button onClick={() => this.handleDeleteCardBtn(card.id)}>
                Delete Card
              </button>
              <button>Edit Card</button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Card
