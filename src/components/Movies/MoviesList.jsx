import React from 'react'
import MovieItem from './MovieItem.jsx'
import MoviesHOC from './MoviesHOC.jsx'
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
              account_id={this.props.account_id}
              session_id={this.props.session_id}
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
