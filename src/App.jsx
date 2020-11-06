import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import CallApi from './utils/apies'
import Cookies from 'universal-cookie'
import MoviesPage from './components/pages/MoviesPage/MoviesPage.jsx'
import MoviePage from './components/pages/MoviePage/MoviePage.jsx'
import { actionCreatorUpdateAuth } from './store/actionCreators/actionCreators'

const cookies = new Cookies()

export const AppContext = React.createContext()

export default class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      console.log(this.props.store.getState())
      this.forceUpdate()
    })
    const session_id = cookies.get('session_id')
    if (session_id) {
      CallApi.get('/account', { params: { session_id } }).then((data) => {
        this.updateSessionId(session_id, data)
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

  updateSessionId = (session_id, user) => {
    this.props.store.dispatch(
      actionCreatorUpdateAuth({
        session_id,
        user,
      })
    )
  }

  onLogOut = () => {
    cookies.remove('session_id')

    this.setState({
      session_id: null,
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
    const { user, session_id } = this.props.store.getState()
    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user,
            session_id,
            updateSessionId: this.updateSessionId,
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
