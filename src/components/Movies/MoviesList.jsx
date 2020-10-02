import React from 'react'
import MovieItem from './MovieItem.jsx'
import MoviesHOC from '../HOC/MoviesHOC.jsx'
import PropTypes from 'prop-types'

const MoviesList = (props) => {
  return (
    <>
      {props.movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id} />
      })}
    </>
  )
}

MoviesList.defaultProps = {
  movies: [],
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MoviesHOC(MoviesList)
