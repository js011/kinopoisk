import React from 'react'
import { api_img_url } from '../../utils/apies'
import { months } from '../../data/months'

export default class MovieItem extends React.Component {
  getMonthNameOnMonthNumber = () => {
    const { movie } = this.props

    return months.filter((month) => {
      return month.month === movie.release_date.substr(5, 2)
    })
  }

  render() {
    const { movie } = this.props

    const releaseDate = `${movie.release_date.substr(8, 2)} ${
      this.getMonthNameOnMonthNumber()[0].shortName
    } ${movie.release_date.substr(0, 4)}`

    const imagePath = movie.poster_path || movie.backdrop_path

    return (
      <div className="movie-card">
        <img
          className="movie-card__img"
          src={
            imagePath
              ? `${api_img_url}${movie.poster_path}`
              : `not-foundPoster.png`
          }
          alt=""
        />
        <div className="movie-card__desc">
          <p className="movie-card__desc__title">{movie.title}</p>
          <p className="movie-card__desc__release-date">{releaseDate}</p>
        </div>
      </div>
    )
  }
}
