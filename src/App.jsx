import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage/MoviesPage.jsx'
import MoviePage from './components/pages/MoviePage/MoviePage.jsx'
import UserPage from './components/pages/UserPage/UserPage.jsx'
import { withAuth } from './hoc/WithAuth.jsx'

class App extends React.Component {
  componentDidMount() {
    const { auth, authActions, moviesActions } = this.props
    if (auth.session_id) {
      authActions.fetchAuth(auth.session_id)
      moviesActions.fetchFavouriteMovies({
        session_id: auth.session_id,
        account_id: auth.account_id,
      })
      moviesActions.fetchWatchlist({
        session_id: auth.session_id,
        account_id: auth.account_id,
      })
    } else {
      authActions.toggleAuthFormModal(true)
    }
  }

  render() {
    const { movies, moviesActions, auth } = this.props
    return (
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <Route path="/kinopoisk/profile/:id" render={() => <UserPage />} />
        <Route
          path="/kinopoisk/movie/:id"
          render={(params) => (
            <MoviePage
              {...params}
              movies={movies}
              moviesActions={moviesActions}
              auth={auth}
            />
          )}
        />
        <Route exact path="/kinopoisk/" component={MoviesPage} />
        <div className="footer"></div>
      </BrowserRouter>
    )
  }
}

export default withAuth(App)
