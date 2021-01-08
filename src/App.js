import React from 'react'
import Modal from './Modal'
import './Modal.css'
import { navigate } from '@reach/router'
import putData from './api'
import './css/button.css'

class App extends React.Component {
  state = {
    showModal: false,
    inputValue: '',
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value.trim() })
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }

  handleHide = () => {
    this.setState({ showModal: false })
  }

  createBoardHandler = async e => {
    this.state.inputValue === '' && alert('Enter a board name')
    const name = { title: this.state.inputValue }
    const boardData = await putData(name)
    navigate(`/board/${boardData.data.board}`)
    this.setState({ inputValue: '' })
  }

  render() {
    return (
      <div>
        <h1 className="text-5xl font-bold  text-center text-green-700 tracking-wide">
          Go Retro
        </h1>
        <div className="max-w-sm mx-auto mt-10 flex justify-around ">
          <button
            className="btn gd-green-blue"
            onClick={this.handleShow}
            disabled
          >
            Join
          </button>
          <button className="btn gd-blue-red" onClick={this.handleShow}>
            Create
          </button>
        </div>

        {this.state.showModal ? (
          <Modal>
            <div className="modal">
              <div className="content">
                <div className="modal-header">
                  <h3>
                    Get Started{' '}
                    <span onClick={this.handleHide} className="close-modal">
                      &times;
                    </span>
                  </h3>
                </div>
                <div className="modal-content">
                  <h4>Board Name </h4>
                  <input
                    type="text"
                    placeholder="Enter Board Name"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                  />
                  <button onClick={this.createBoardHandler}>
                    Create Board
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    )
  }
}

export default App
