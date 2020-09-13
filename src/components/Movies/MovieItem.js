import React from 'react'
import { api_img_url } from '../../utils/apies'

const MovieItem = (props) => {
  const { movie } = props

  return (
    <div className="movie-card">
      <img
        className="movie-card__img"
        src={
          movie.poster_path !== null
            ? `${api_img_url}${movie.poster_path}`
            : `not-foundPoster.png`
        }
        alt={movie.title}
      />
      <div className="movie-card__desc">
        <p className="movie-card__desc__title">{movie.title}</p>
      </div>
    </div>
  )
}

export default MovieItem
