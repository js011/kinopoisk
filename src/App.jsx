import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Filters from './components/Filters/Filters.jsx'
import MoviesContainer from './components/Movies/MoviesContainer.jsx'
import { api_url, api_key_movieDB_v3, fetchApi } from './utils/apies'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class App extends Component {
  constructor() {
    super()

    this.initialState = {
      user: null,
      session_id: '',
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: new Date().getFullYear(),
        with_genres: [],
      },
      page: 1,
    }

    this.state = { ...this.initialState, total_pages: '' }
  }

  componentDidMount() {
    const session_id = cookies.get('session_id')

    if (session_id) {
      fetchApi(
        `${api_url}/account?api_key=${api_key_movieDB_v3}&session_id=${session_id}`
      ).then((data) => {
        this.updateUser(data)
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
    const { filters, page, total_pages, user } = this.state
    return (
      <>
        <div className="header">
          <Header
            updateUser={this.updateUser}
            updateSessionId={this.updateSessionId}
            user={user}
          />
        </div>
        <div className="main container">
          <div className="row">
            <div className="filters col-3">
              <Filters
                onChangeFilters={this.onChangeFilters}
                filters={filters}
                page={page}
                onChangePage={this.onChangePage}
                total_pages={total_pages}
                resetFilters={this.resetFilters}
              />
            </div>
            <div className="movies col-9">
              <MoviesContainer
                filters={filters}
                page={page}
                onChangePage={this.onChangePage}
                onChangeTotalPages={this.onChangeTotalPages}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
