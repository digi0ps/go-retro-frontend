import React from 'react'
import CardInput from './CardInput'
import CardUI from './CardUI'

class Card extends React.Component {
  handleDeleteCardBtn = id => {
    this.props.deleteCardAction(this.props.colId, id)
  }

  render() {
    const { cardData, colId, addCardAction, editCardAction } = this.props
    return (
      <div style={{ border: 'solid 1px teal' }}>
        <CardInput colId={colId} addCardAction={addCardAction} />

        <div>
          <ul>
            {cardData.cards.length === 0 ? 'Empty cards' : null}
            {cardData.cards.map(card => (
              <CardUI
                key={card.id}
                cardData={card}
                colId={colId}
                deleteCardEvent={this.handleDeleteCardBtn}
                editCardEvent={editCardAction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Card
