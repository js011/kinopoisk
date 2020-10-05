import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import CallApi from './utils/apies'
import Cookies from 'universal-cookie'
import MoviesPage from './components/pages/MoviesPage/MoviesPage.jsx'
import MoviePage from './components/pages/MoviePage/MoviePage.jsx'

const cookies = new Cookies()

export const AppContext = React.createContext()

export default class App extends React.Component {
  constructor() {
    super()

    this.initialState = {
      user: null,
      session_id: null,
      account_id: null,
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: new Date().getFullYear(),
        with_genres: [],
      },
      page: 1,
      total_pages: '',
    }

    this.state = { ...this.initialState }
  }

  componentDidMount() {
    const session_id = cookies.get('session_id')

    if (session_id) {
      CallApi.get('/account', { params: { session_id } }).then((data) => {
        this.updateUser(data)
        this.updateAccountId(data.id)
        this.updateSessionId(session_id)
      })
    }
  }

  onChangeFilters = (e) => {
    const { name, value } = e.target

    this.setState((s) => ({
      filters: {
        ...s.filters,
        [name]: value,
      },
    }))
  }

  updateUser = (user) => {
    this.setState({
      user,
    })
  }

  updateSessionId = (session_id) => {
    cookies.set('session_id', session_id, {
      path: '/',
      maxAge: 2592000,
    })
    this.setState({
      session_id,
    })
  }

  updateAccountId = (account_id) => {
    cookies.set('account_id', account_id, {
      path: '/',
      maxAge: 2592000,
    })
    this.setState({
      account_id,
    })
  }

  onLogOut = () => {
    cookies.remove('session_id')
    cookies.remove('account_id')

    this.setState({
      session_id: null,
      account_id: null,
      user: null,
    })
  }

  onChangePage = (page) => {
    this.setState({
      page,
    })
  }

  onChangeTotalPages = (total_pages) => {
    this.setState({
      total_pages,
    })
  }

  resetFilters = () => {
    this.setState(this.initialState)
  }

  render() {
    const { user, session_id, account_id } = this.state
    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user,
            updateUser: this.updateUser,
            session_id,
            updateSessionId: this.updateSessionId,
            account_id,
            updateAccountId: this.updateAccountId,
            onLogOut: this.onLogOut,
          }}
        >
          <div className="header">
            <Header updateSessionId={this.updateSessionId} user={user} />
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
