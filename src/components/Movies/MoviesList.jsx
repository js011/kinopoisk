import React from 'react'
import MovieItem from './MovieItem.jsx'
import MoviesHOC from '../HOC/MoviesHOC.jsx'
import PropTypes from 'prop-types'

class MoviesList extends React.PureComponent {
  static defaultProps = {
    movies: [],
  }

  static propTypes = {
    movies: PropTypes.array.isRequired,
  }

  render() {
    return (
      <>
        {this.props.movies.map((movie) => {
          return (
            <MovieItem
              movie={movie}
              favouriteMovies={this.props.favouriteMovies}
              watchList={this.props.watchList}
              key={movie.id}
            />
          )
        })}
      </>
    )
  }
}

export default MoviesHOC(MoviesList)
