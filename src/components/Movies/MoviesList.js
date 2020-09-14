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
      this.getMovies(filters)
    }

    if (p.page !== page) {
      this.getMovies(filters, page)
    }

    if (p.filters.primary_release_year !== filters.primary_release_year) {
      onChangePage(1)
      this.getMovies(filters)
    }
  }

  getMovies = (filters, page = 1) => {
    const { sort_by, primary_release_year } = filters
    const { onChangeTotalPages } = this.props

    const link = `${api_url}/discover/movie?api_key=${api_key_movieDB_v3}&language=ru-RU&sort_by=${sort_by}&page=${page}&primary_release_year=${primary_release_year}`
    return fetch(link)
      .then((response) => response.json())
      .then((data) => {
        onChangeTotalPages(data.total_pages)
        this.setState({ movies: data.results })
      })
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
