import React from 'react'

export default class UIDropdown extends React.Component {
  static defaultProps = {
    position: {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    },
  }

  toggleShow = () => {
    const { auth, authActions } = this.props
    authActions.toggleUserModal(auth.showUserModal)
  }

  render() {
    const { auth } = this.props
    return (
      <>
        {this.props.render(this.toggleShow)}
        <div className="dropdown__wrapper">
          {auth.showUserModal && (
            <div
              className="dropdown__popover"
              style={{ ...this.props.position }}
            >
              <div className="dropdown__cover" onClick={this.toggleShow}></div>
              <div className="dropdown__wrapper-content">
                {this.props.children(this.toggleShow)}
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}
