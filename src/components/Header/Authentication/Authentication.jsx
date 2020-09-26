import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import AuthenticationForm from './AuthenticationForm.jsx'

export default class Authentication extends React.Component {
  constructor() {
    super()

    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {
    const { updateUser, updateSessionId } = this.props
    return (
      <>
        <button
          className="btn btn-outline-warning"
          type="button"
          onClick={this.toggleModal}
        >
          Войти
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalBody>
            <AuthenticationForm
              updateUser={updateUser}
              updateSessionId={updateSessionId}
            />
          </ModalBody>
        </Modal>
      </>
    )
  }
}
