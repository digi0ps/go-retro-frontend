import React from 'react'
import CardInput from './CardInput'

const Card = ({
  cardData,
  colId,
  addCardAction,
  deleteCardAction,
  editCardAction,
}) => (
  <div style={{ border: 'solid 1px teal' }}>
    <CardInput
      colId={colId}
      addCardAction={addCardAction}
      deleteCardAction={deleteCardAction}
      editCardAction={editCardAction}
    />

    <ul>
      {cardData.cards.length === 0 ? 'Empty cards' : null}
      {cardData.cards.map(card => (
        <div key={card.id}>
          <li>{card.content}</li>
          <button>Delete Card</button>
          <button>Edit Card</button>
        </div>
      ))}
    </ul>
  </div>
)

export default Card
