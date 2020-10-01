import React from 'react'
import { AppContext } from '../../App.jsx'

class User extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div>
        <img
          width="40"
          className="rounded-circle"
          src={`https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64`}
          alt=""
        />
      </div>
    )
  }
}

const UserContainer = (props) => (
  <AppContext.Consumer>
    {(context) => <User user={context.user} {...props} />}
  </AppContext.Consumer>
)

export default UserContainer
