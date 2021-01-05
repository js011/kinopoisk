import React from 'react'
import CallApi from '../../utils/apies'
import _ from 'lodash'

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

    componentDidUpdate(prevProps) {
      const { onChangePage, filters, page } = this.props

      if (
        !_.isEqual(prevProps.filters.sort_by, filters.sort_by) ||
        !_.isEqual(
          prevProps.filters.primary_release_year,
          filters.primary_release_year
        ) ||
        !_.isEqual(prevProps.filters.with_genres, filters.with_genres)
      ) {
        onChangePage(1)
        this.getMovies(filters)
      }

      if (prevProps.page !== page) {
        this.getMovies(filters, page)
      }
    }


    getMovies = (filters, page = 1) => {
      const { sort_by, primary_release_year, with_genres } = filters
      const { onChangeTotalPages } = this.props

      const apiParams = {
        language: 'ru-RU',
        sort_by,
        page,
        primary_release_year,
        with_genres: with_genres.join(','),
      }

      return CallApi.get('/discover/movie', { params: apiParams }).then(
        (data) => {
          onChangeTotalPages(data.total_pages)
          this.setState({ movies: data.results })
        }
      )
    }

    render() {
      const { movies, favouriteMovies, watchList } = this.state
      return (
        <Component
          account_id={this.props.account_id}
          session_id={this.props.session_id}
          movies={movies}
          favouriteMovies={favouriteMovies}
          watchList={watchList}
        />
      )
    }
  }
