import React from 'react'
import Filters from '../../Filters/Filters.jsx'
import MoviesList from '../../Movies/MoviesList.jsx'

export default class MoviesPage extends React.Component {
  constructor() {
    super()

    this.initialState = {
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

  resetFilters = () => {
    this.setState(this.initialState)
  }

  render() {
    const { filters, page, total_pages } = this.state
    return (
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
          <MoviesList
            filters={filters}
            page={page}
            onChangePage={this.onChangePage}
            onChangeTotalPages={this.onChangeTotalPages}
          />
        </div>
      </div>
    )
  }
}
