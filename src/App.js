import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import MoviesList from './components/Movies/MoviesList'

class App extends Component {
  constructor() {
    super()

    this.initialState = {
      filters: {
        sort_by: 'popularity.desc',
        primary_release_year: new Date().getFullYear(),
        with_genres: [],
      },
      page: 1,
    }

    this.state = { ...this.initialState, total_pages: '' }
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

  onChangeGenres = (e) => {
    const { name, value } = e.target
    const updateGenres = this.state.filters.with_genres

    if (updateGenres.indexOf(String(value)) === -1) {
      this.setState((s) => ({
        filters: {
          ...s.filters,
          [name]: [...s.filters.with_genres, value],
        },
      }))
    } else {
      this.setState((s) => ({
        filters: {
          ...s.filters,
          [name]: s.filters.with_genres.filter((item) => item !== value),
        },
      }))
    }
  }

  resetFilters = () => {
    this.setState(this.initialState)
  }

  render() {
    const { filters, page, total_pages } = this.state
    return (
      <>
        <div className="header">
          <Header />
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
                onChangeGenres={this.onChangeGenres}
                resetFilters={this.resetFilters}
              />
            </div>
            <div className="movies col-9">
              <MoviesList
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
