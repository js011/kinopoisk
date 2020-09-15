import React from 'react'
import { api_img_url } from '../../utils/apies'
import { months } from '../../data/months'

const MovieItem = (props) => {
  const { movie } = props

  const getMonthNameOnMonthNumber = () => {
    return months.filter((month) => {
      return month.month === movie.release_date.substr(5, 2)
    })
  }

  const releaseDate = `${movie.release_date.substr(8, 2)} ${
    getMonthNameOnMonthNumber()[0].shortName
  } ${movie.release_date.substr(0, 4)}`

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
        <p className="movie-card__desc__release-date">{releaseDate}</p>
      </div>
    </div>
  )
}

export default MovieItem
