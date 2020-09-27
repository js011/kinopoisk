import React from 'react'
import Authentication from './Authentication/Authentication.jsx'
import User from './User.jsx'

class Header extends React.Component {
  render() {
    const { user, updateUser, updateSessionId } = this.props
    return (
      <div className="container">
        <div className="pt-3 pb-3 row col-12">
          <div className="title col-2">
            <p className="title__name">
              Kino<span className="title__sub-name">poisk</span>
            </p>
          </div>
          <div className="search col-8"></div>
          <div className="login col-2">
            {user ? (
              <User user={user} />
            ) : (
              <Authentication
                updateSessionId={updateSessionId}
                updateUser={updateUser}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
