import React from 'react'
import CardUI from './CardUI'

class Card extends React.Component {
  render() {
    const { cardData, colId, editCardAction, deleteCardAction } = this.props
    return (
      <>
        {cardData.cards.length === 0 ? 'Start adding some cards' : null}
        {cardData.cards.map(card => (
          <CardUI
            // draggable
            key={card.id}
            cardData={card}
            colId={colId}
            deleteCardEvent={deleteCardAction}
            editCardEvent={editCardAction}
          />
        ))}
      </>
    )
  }
}

export default Card
