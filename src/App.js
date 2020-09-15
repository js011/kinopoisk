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
      },
      page: 1,
      total_pages: '',
    }

    this.state = this.initialState
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
