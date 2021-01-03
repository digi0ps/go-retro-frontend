import React from 'react'
import CardUI from './CardUI'

class Card extends React.Component {
  handleDeleteCardBtn = id => {
    this.props.deleteCardAction(this.props.colId, id)
  }

  render() {
    const { cardData, colId, editCardAction } = this.props
    return (
      <>
        {cardData.cards.length === 0 ? 'Start adding some cards' : null}
        {cardData.cards.map(card => (
          <CardUI
            key={card.id}
            cardData={card}
            colId={colId}
            deleteCardEvent={this.handleDeleteCardBtn}
            editCardEvent={editCardAction}
          />
        ))}
      </>
    )
  }
}

export default Card
