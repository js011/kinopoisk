import React from 'react'
import AppContextHOC from '../HOC/AppContextHOC.jsx'
import UIDropdown from '../UI Components/UIDropdown.jsx'

class User extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div className="user">
        <div className="dropdown">
          <UIDropdown
            render={(toggleShow) => (
              <img
                width="40"
                className="user-img rounded-circle"
                src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64`}
                alt=""
                onClick={toggleShow}
              />
            )}
            position={{ right: '2.5px', top: '55px' }}
          >
            {(toggleShow) => {
              return (
                <div className="dropdown__menu">
                  <div className="dropdown__menu-item" onClick={toggleShow}>
                    Настройки
                  </div>
                  <div className="dropdown__menu-item" onClick={toggleShow}>
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
