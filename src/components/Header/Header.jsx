import React from 'react'
import Authentication from './Authentication/Authentication.jsx'
import User from './User.jsx'
import { withAuth } from '../../hoc/WithAuth.jsx'

class Header extends React.Component {
  render() {
    const { auth, authActions } = this.props
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
            {auth.user ? (
              <User />
            ) : (
              <Authentication
                showAuthFormModal={auth.showAuthFormModal}
                toggleAuthFormModal={authActions.toggleAuthFormModal}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Header)
