import React from 'react'
import { Link } from 'react-router-dom'
import Authentication from './Authentication/Authentication.jsx'
import User from './User.jsx'
import { withAuth } from '../../hoc/WithAuth.jsx'

class Header extends React.Component {
  render() {
    const { auth, authActions } = this.props
    return (
      <div className="container">
        <div className="pt-2 pb-2 row col-12">
          <div className="title col-4">
            <p className="title__name">
              <Link to={'/'}>
                Kino<span className="title__sub-name">poisk</span>
              </Link>
              <span className="ml-2 with-TMDB-Api">
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  with TMDB Api
                </a>
              </span>
            </p>
          </div>
          <div className="search col-6"></div>
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
