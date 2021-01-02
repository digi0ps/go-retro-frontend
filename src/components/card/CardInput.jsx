import React, { Component } from 'react'

class CardInput extends Component {
  state = {
    inpValue: '',
  }

  handleChange = e => {
    this.setState({ inpValue: e.target.value })
  }

  handleAddBtn = () => {
    const cardInp = this.state.inpValue.trim()
    if (cardInp.length !== 0) {
      this.props.addCardAction(cardInp, this.props.colId)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          type="text"
          value={this.state.inpValue}
          placeholder="Enter Card Content"
          name={this.props.colId}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddBtn}>Add Card</button>
      </div>
    )
  }
}

export default CardInput
