import React from 'react'
import { api_url, api_key_movieDB_v3 } from '../../utils/apies'
import _ from 'lodash'
import queryString from 'query-string'

export default (Component) =>
  class MoviesHOC extends React.PureComponent {
    constructor() {
      super()

      this.state = {
        movies: [],
      }
    }

    componentDidMount() {
      const { filters, page } = this.props

      this.getMovies(filters, page)
    }

    componentDidUpdate(p) {
      const { onChangePage, filters, page } = this.props

      if (!_.isEqual(p.filters, filters)) {
        onChangePage(1)
        this.getMovies(filters)
      }

      if (p.page !== page) {
        this.getMovies(filters, page)
      }
    }

    getMovies = (filters, page = 1) => {
      const { sort_by, primary_release_year, with_genres } = filters
      const { onChangeTotalPages } = this.props

      const apiParams = {
        api_key: api_key_movieDB_v3,
        language: 'ru-RU',
        sort_by,
        page,
        primary_release_year,
        with_genres: with_genres.join(','),
      }

      const link = `
    ${api_url}/discover/movie?${queryString.stringify(apiParams)}`

      return fetch(link)
        .then((response) => response.json())
        .then((data) => {
          onChangeTotalPages(data.total_pages)
          this.setState({ movies: data.results })
        })
    }

    render() {
      return <Component {...this.props} movies={this.state.movies} />
    }
  }
