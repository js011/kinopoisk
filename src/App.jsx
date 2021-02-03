import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header/Header.jsx'
import MoviesPage from './components/pages/MoviesPage/MoviesPage.jsx'
import MoviePage from './components/pages/MoviePage/MoviePage.jsx'
import UserPage from './components/pages/UserPage/UserPage.jsx'
import { fetchAuth } from './redux/auth/auth.actions'
import {
  fetchFavouriteMovies,
  fetchWatchlist,
} from './redux/movies/movies.actions'

export const App = () => {
  const session_id = useSelector((store) => store.auth.session_id)
  const account_id = useSelector((store) => store.auth.account_id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (session_id) {
      dispatch(fetchAuth(session_id))
      dispatch(fetchFavouriteMovies(session_id, account_id))
      dispatch(fetchWatchlist(session_id, account_id))
    }
  }, [])

  return (
    <BrowserRouter basename="/kinopoisk/">
      <div className="header">
        <Header />
      </div>
      <Route exact path="/" component={MoviesPage} />
      <Route path="/profile/:id" component={UserPage} />
      <Route path="/movie/:id" component={MoviePage} />
      <div className="footer"></div>
    </BrowserRouter>
  )
}
