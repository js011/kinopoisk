import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import AuthenticationForm from './AuthenticationForm.jsx'

export default class Authentication extends React.Component {
  toggleModal = () => {
    const { showAuthFormModal, toggleAuthFormModal } = this.props
    toggleAuthFormModal(!showAuthFormModal)
  }

  render() {
    const { showAuthFormModal } = this.props
    return (
      <>
        <button
          className="btn btn-outline-warning"
          type="button"
          onClick={this.toggleModal}
        >
          Войти
        </button>
        <button className="ml-2 btn btn-outline-warning" type="button">
          <a
            href="https://www.themoviedb.org/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Регистрация
          </a>
        </button>
        <Modal isOpen={showAuthFormModal} toggle={this.toggleModal}>
          <ModalBody>
            <AuthenticationForm />
          </ModalBody>
        </Modal>
      </>
    )
  }
}
