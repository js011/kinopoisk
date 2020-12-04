import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage/MoviesPage.jsx'
import MoviePage from './components/pages/MoviePage/MoviePage.jsx'
import { withAuth } from './hoc/WithAuth.jsx'

class App extends React.Component {
  componentDidMount() {
    const { auth, authActions } = this.props
    if (auth.session_id) {
      authActions.fetchAuth(auth.session_id)
    }
  }

  render() {
    const { auth, authActions } = this.props
    return (
      <BrowserRouter>
        <div className="header">
          <Header updateAuth={authActions.updateAuth} user={auth.user} />
        </div>
        <div className="main container">
          <Route exact path="/kinopoisk/" component={MoviesPage} />
          <Route path="/kinopoisk/movie/:id" component={MoviePage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default withAuth(App)
