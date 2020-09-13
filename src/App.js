import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import MoviesList from './components/Movies/MoviesList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      filters: {
        sort_by: 'popularity.desc',
      },
      page: 1,
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

  onChangePage = (page) => {
    this.setState({
      page,
    })
  }

  render() {
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
                filters={this.state.filters}
                page={this.state.page}
                onChangePage={this.onChangePage}
              />
            </div>
            <div className="movies col-9">
              <MoviesList
                filters={this.state.filters}
                page={this.state.page}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
