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

  handleOnDragEnd = e => {
    e.preventDefault()
  }

  handleOnDrop = e => {
    e.preventDefault()
    // const { colId, cardId, cardContent } = e.target.dataset
    const currentColId = this.props.data.id
    console.log(
      `Move  ${e.dataTransfer.getData(
        'prevCardId',
      )} from  ${e.dataTransfer.getData(
        'prevColId',
      )} to  ${currentColId} and the previous card content is :${e.dataTransfer.getData(
        'prevCardContent',
      )}`,
    )
    // prevCardId, prevColId, currentColId
    const prevCardId = e.dataTransfer.getData('prevCardId')
    const prevColId = e.dataTransfer.getData('prevColId')
    const prevCardContent = e.dataTransfer.getData('prevCardContent')

    const currentColId = this.props.data.id
    this.props.dropCardAction()
  }

  render() {
    const {
      data,
      deleteColumnEvent,
      updateColumnEvent,
      addCardAction,
      deleteCardAction,
      editCardAction,
      dropCardAction,
    } = this.props
    return (
      <div
        className="column"
        onDragOver={e => e.preventDefault()}
        onDrop={e => this.handleOnDrop(e)}
        onDragEnd={this.handleOnDragEnd}
        onDragEnter={e => e.preventDefault()}
        onDragLeave={e => e.preventDefault()}
      >
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
              deleteCardAction={deleteCardAction}
              editCardAction={editCardAction}
              dropCardAction={dropCardAction}
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
              dropCardAction={dropCardAction}
            />
            <br />
          </div>
        )}
      </div>
    )
  }
}
export default Column
