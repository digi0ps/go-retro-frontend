import React from 'react'
import Modal from './Modal'
import './App.css'
import './Modal.css'

class App extends React.Component {
  state = {
    showModal: false,
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }

  handleHide = () => {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <div className="app">
        <h2>Click the button to display modal!</h2>
        <button onClick={this.handleShow}>Show Modal</button>
        {this.state.showModal ? (
          <Modal>
            <div className="modal">
              <div className="content">
                <div className="modal-header">
                  <p>Modal Children</p>
                  <span className="close-modal">&times;</span>
                </div>
                <div className="modal-content">
                  <button onClick={this.handleHide}>Hide Modal</button>
                  <input type="text" placeholder="Board Name" />
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
