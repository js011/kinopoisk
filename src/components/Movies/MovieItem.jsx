import React from 'react'
import { api_img_url } from '../../utils/apies'
import { months } from '../../data/months'
import {
  Star,
  StarBorder,
  Bookmark,
  BookmarkBorder,
  MoreHoriz,
} from '@material-ui/icons'
import UIDropdown from '../UI Components/UIDropdown.jsx'

class MovieItem extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      favourite: false,
      willWatch: false,
    }
  }
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
    return (
      <div className="movie-card">
        <img
          className="movie-card__img"
          src={
            movie.poster_path
              ? `${api_img_url}${movie.poster_path}`
              : `not-foundPoster.png`
          }
          alt=""
        />
        <div className="movie-card__desc">
          <p className="movie-card__desc__title">{movie.title}</p>
          <p className="movie-card__desc__release-date">{releaseDate}</p>
        </div>
        <div className="movie-settings">
          <UIDropdown
            render={(toggleShow) => (
              <div className="more-horiz" onClick={toggleShow}>
                <MoreHoriz className="more-horiz__icon" />
              </div>
            )}
            position={{ top: '30px', left: '-180px' }}
          >
            {(toggleShow) => (
              <div className="settings-menu">
                <div
                  className="favourite-movie settings-menuItem"
                  onClick={toggleShow}
                >
                  {this.state.favourite ? <Star /> : <StarBorder />}
                  <span className="settings-title">Избранное</span>
                </div>
                <div
                  className="willWatch-movie settings-menuItem"
                  onClick={toggleShow}
                >
                  {this.state.willWatch ? <Bookmark /> : <BookmarkBorder />}
                  <span className="settings-title">Посмотреть</span>
                </div>
              </div>
            )}
          </UIDropdown>
        </div>
      </div>
    )
  }
}

export default MovieItem
