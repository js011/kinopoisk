import React from 'react'
import { api_url, api_key_movieDB_v3 } from '../../utils/apies'
import MovieItem from '../Movies/MovieItem'

class MoviesList extends React.Component {
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

    if (p.filters.sort_by !== filters.sort_by) {
      onChangePage(1)
      this.getMovies(filters, 1)
    }

    if (p.page !== page) {
      this.getMovies(filters, page)
    }
  }

  getMovies = (filters, page) => {
    const { sort_by } = filters

    const link = `${api_url}/discover/movie?api_key=${api_key_movieDB_v3}&language=ru-RU&sort_by=${sort_by}&page=${page}`
    return fetch(link)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.results }))
  }

  render() {
    return (
      <>
        {this.state.movies.map((movie) => {
          return <MovieItem movie={movie} key={movie.id} />
        })}
      </>
    )
  }
}

export default MoviesList
