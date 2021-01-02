import React from 'react'

const Card = ({ cardData }) => (
  <div style={{ border: 'solid 1px teal' }}>
    <button>Add Card</button>
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
