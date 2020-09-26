import React from 'react'
import Authentication from './Authentication/Authentication'

class Header extends React.Component {
  render() {
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
            <Authentication />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
