import React from 'react'
import Card from '../card/Card'
import CardInput from '../card/CardInput'

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
    const {
      data,
      deleteColumnEvent,
      updateColumnEvent,
      addCardAction,
      deleteCardAction,
      editCardAction,
    } = this.props
    return (
      <div className="column">
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

            <Card
              cardData={data}
              colId={data.id}
              addCardAction={addCardAction}
              deleteCardAction={deleteCardAction}
              editCardAction={editCardAction}
            />
            <br />
          </div>
        ) : (
          <div key={data.id}>
            <b>{data.name}</b>
            <button onClick={() => deleteColumnEvent(data.id)}>
              Delete Column
            </button>
            <button onClick={this.handleTextEdit}>Edit Column</button>

            <CardInput colId={data.id} addCardAction={addCardAction} />

            <Card
              cardData={data}
              colId={data.id}
              deleteCardAction={deleteCardAction}
              editCardAction={editCardAction}
            />
            <br />
          </div>
        )}
      </div>
    )
  }
}
export default Column
