import React from 'react'

class CardUI extends React.Component {
  state = {
    editState: false,
    editedText: this.props.cardData.content,
  }

  handleEditCardBtn = id => {
    this.setState({ editState: true })
  }

  handleChange = e => {
    this.setState({ editedText: e.target.value })
  }

  render() {
    const { cardData, deleteCardEvent, editCardEvent, colId } = this.props
    return (
      <div className="card" draggable key={cardData.id}>
        {this.state.editState ? (
          <div>
            {' '}
            <input
              type="text"
              value={this.state.editedText}
              onChange={this.handleChange}
            />
            <button
              onClick={() => {
                if (this.state.editedText.length === 0) {
                  alert('enter valid card content')
                } else {
                  editCardEvent(colId, cardData.id, this.state.editedText)
                  this.setState({ editState: false })
                }
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <li>{cardData.content}</li>
            <button onClick={() => deleteCardEvent(cardData.id)}>
              Delete Card
            </button>
            <button onClick={() => this.handleEditCardBtn(cardData.id)}>
              Edit Card
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default CardUI
