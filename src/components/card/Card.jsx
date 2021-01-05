import React from 'react'
import CardUI from './CardUI'

class Card extends React.Component {
  handleDeleteCardBtn = id => {
    this.props.deleteCardAction(this.props.colId, id)
  }

  handleDragStart = e => {}

  render() {
    const { cardData, colId, editCardAction, dragStart } = this.props
    return (
      <>
        {cardData.cards.length === 0 ? 'Start adding some cards' : null}
        {cardData.cards.map(card => (
          <CardUI
            // draggable
            key={card.id}
            cardData={card}
            colId={colId}
            deleteCardEvent={this.handleDeleteCardBtn}
            editCardEvent={editCardAction}
            dragStart={dragStart}
          />
        ))}
      </>
    )
  }
}

export default Card
