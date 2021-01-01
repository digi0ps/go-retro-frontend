import React from 'react'

class Column extends React.Component {
  state = {
    editState: false,
    editedText: this.props.data.name,
  }

  handleTextEdit = () => {
    this.setState({ editState: true })
  }

  handleChange = e => {
    this.setState({ editedText: e.target.value })
  }

  render() {
    const { data, deleteColumnEvent, updateColumnEvent } = this.props
    return (
      <div>
        {this.state.editState ? (
          <div key={data.id}>
            <input
              type="text"
              value={this.state.editedText}
              onChange={this.handleChange}
            />
            <button onClick={() => deleteColumnEvent(data.id)}>
              Delete Column
            </button>
            <button
              onClick={() => {
                if (this.state.editedText.length === 0) {
                  alert('enter valid column name')
                } else {
                  updateColumnEvent(this.state.editedText, data.id)
                  this.setState({ editState: false })
                }
              }}
            >
              Save
            </button>
            <ul>
              {data.cards.length === 0 ? 'Empty cards' : null}
              {data.cards.map(card => (
                <li key={card.id}>{card.content}</li>
              ))}
            </ul>
            <br />
          </div>
        ) : (
          <div key={data.id}>
            <b>{data.name}</b>
            <button onClick={() => deleteColumnEvent(data.id)}>
              Delete Column
            </button>
            <button onClick={this.handleTextEdit}>Edit Column</button>
            <ul>
              {data.cards.length === 0 ? 'Empty cards' : null}
              {data.cards.map(card => (
                <li key={card.id}>{card.content}</li>
              ))}
            </ul>
            <br />
          </div>
        )}
      </div>
    )
  }
}
export default Column
