import React from 'react'
import AppContextHOC from '../HOC/AppContextHOC.jsx'
import UIDropdown from '../UI Components/UIDropdown.jsx'
import CallApi from '../../utils/apies'

class User extends React.Component {
  handleLogOut = () => {
    CallApi.delete('/authentication/session', {
      body: { session_id: this.props.session_id },
    }).then(() => {
      this.props.onLogOut()
    })
  }

  render() {
    const { user } = this.props

    return (
      <div className="user">
        <div className="dropdown">
          <UIDropdown
            render={(toggleShow) => (
              <img
                className="user-img rounded-circle"
                src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64`}
                alt=""
                onClick={toggleShow}
              />
            )}
            position={{ right: '2.5px', top: '50px' }}
          >
            {() => {
              return (
                <div className="dropdown__menu">
                  <div
                    className="dropdown__menu-item"
                    onClick={this.handleLogOut}
                  >
                    Выйти
                  </div>
                </div>
              )
            }}
          </UIDropdown>
        </div>
      </div>
    )
  }
}

export default AppContextHOC(User)
