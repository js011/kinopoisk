import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage/MoviesPage.jsx'
import MoviePage from './components/pages/MoviePage/MoviePage.jsx'
import {
  updateAuth,
  onLogOut,
  toggleUserModal,
  fetchAuth,
} from './redux/auth/auth.actions'

export const AppContext = React.createContext()

class App extends React.Component {
  componentDidMount() {
    const { session_id, fetchAuth } = this.props
    if (session_id) {
      fetchAuth(session_id)
    }
  }

  render() {
    const {
      user,
      session_id,
      updateAuth,
      onLogOut,
      showUserModal,
      toggleUserModal,
    } = this.props
    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user,
            session_id,
            updateAuth,
            onLogOut,
            showUserModal,
            toggleUserModal,
          }}
        >
          <div className="header">
            <Header updateAuth={updateAuth} user={user} />
          </div>
          <div className="main container">
            <Route exact path="/kinopoisk/" component={MoviesPage} />
            <Route path="/kinopoisk/movie/:id" component={MoviePage} />
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    user: auth.user,
    session_id: auth.session_id,
    isAuth: auth.isAuth,
    showUserModal: auth.showUserModal,
  }
}

const mapDispatchToProps = {
  updateAuth,
  onLogOut,
  toggleUserModal,
  fetchAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
