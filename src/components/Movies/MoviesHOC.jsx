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

    getSettingsMovies = (nameState, url) => {
      const { session_id, account_id, page } = this.props
      const apiParams = {
        language: 'ru-RU',
        session_id,
        page,
      }

      return CallApi.get(`/account/${account_id}${url}`, {
        params: apiParams,
      }).then((data) => {
        this.setState({
          [nameState]: data.results,
        })
      })
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
