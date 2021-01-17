import React from 'react'
import Modal from './Modal'
import './Modal.css'
import { navigate } from '@reach/router'
import putData from './api'
import join from './assets/join.svg'

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
      <div className="h-screen bg-gray-300 font-sans">
        <h1 className="text-2xl text-center py-8">Go Retro</h1>

        <img
          src={join}
          alt="illustration"
          className="max-w-sm w-80 m-auto h-32 px-8 sm:max-w-md sm:w-auto sm:h-auto"
        />
        <div className="text-center my-4">
          <p className="uppercase font-mono py-2">Anonymous Task Board</p>
          <div className="max-w-xl m-auto px-4 text-justify">
            <ul className="list-outside p-4 sm:py-2">
              <li className="list-disc py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li className="list-disc py-3">
                Quam pellentesque nec nam aliquam sem et. Sem integer vitae
                justo eget magna fermentum iaculis.
              </li>
            </ul>
          </div>
          <div className="py-6 sm:py-6">
            <button
              onClick={this.handleShow}
              disabled={true}
              className="bg-gray-200 px-3 py-1 mx-2 rounded-md text-gray-400 text-md tracking-wide font-medium cursor-not-allowed"
            >
              Join Board
            </button>
            <button
              onClick={this.handleShow}
              className="px-3 py-1 mx-2 rounded-md text-md hover:bg-green-500 tracking-wide font-medium"
            >
              Create Board
            </button>
          </div>
          <p className="absolute py-4 bottom-0 left-0 right-0">
            Made by{' '}
            <a className="hover:underline" href="https://github.com/rohit1101">
              rohit1101
            </a>{' '}
            &{' '}
            <a className="hover:underline" href="https://github.com/digi0ps">
              digi0ps
            </a>{' '}
            !
          </p>
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
