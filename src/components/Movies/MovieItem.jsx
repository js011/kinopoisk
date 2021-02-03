import React from 'react'
import { Link } from 'react-router-dom'
import {
  Star,
  StarBorder,
  Bookmark,
  BookmarkBorder,
  MoreHoriz,
} from '@material-ui/icons'
import { api_img_url } from '../../utils/apies'
import { months } from '../../data/months'
import { withAuth } from '../../hoc/WithAuth.jsx'

class MovieItem extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      showMovieModal: false,
      favourite: false,
    }
  }

  getMonthNameOnMonthNumber = () => {
    const { movie } = this.props

    return months.filter((month) => {
      return month.month === movie.release_date.substr(5, 2)
    })
  }

  toogleMovieModal = () => {
    const { auth, authActions } = this.props
    if (auth.session_id) {
      this.setState((state) => ({
        showMovieModal: !state.showMovieModal,
      }))
    } else {
      authActions.toggleAuthFormModal(true)
    }
  }

  updateFavouriteMovies = () => {
    const { movie, auth, moviesActions } = this.props

    moviesActions.updateFavouriteMovies({
      account_id: auth.account_id,
      session_id: auth.session_id,
      media_id: movie.id,
    })

    this.toogleMovieModal()
  }

  updateWatchlist = () => {
    const { movie, auth, moviesActions } = this.props

    moviesActions.updateWatchlist({
      account_id: auth.account_id,
      session_id: auth.session_id,
      media_id: movie.id,
    })

    this.toogleMovieModal()
  }

  isFavourite = (movies = []) => {
    const { movie } = this.props

    return movies.findIndex((m) => m.id === movie.id) !== -1
  }

  render() {
    const { movie, movies } = this.props

    const releaseDate = `${movie.release_date.substr(8, 2)} ${
      this.getMonthNameOnMonthNumber()[0].shortName
    } ${movie.release_date.substr(0, 4)}`

    return (
      <div className="movie-card">
        <Link to={`/movie/${movie.id}/media/`}>
          <img
            className="movie-card__img"
            src={
              movie.poster_path
                ? `${api_img_url}${movie.poster_path}`
                : `/kinopoisk/images/not-foundPoster.png`
            }
            alt=""
          />
        </Link>
        <div className="movie-card__desc">
          <p className="movie-card__desc__vote-average">
            {String(movie.vote_average).length === 1
              ? `${movie.vote_average}.0`
              : movie.vote_average}
          </p>
          <p className="movie-card__desc__title">
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </p>
          <p className="movie-card__desc__release-date">{releaseDate}</p>
        </div>
        <div className="movie-settings">
          <div className="movie-settings__wrapper">
            <div className="more-horiz">
              <MoreHoriz
                className="more-horiz__icon"
                onClick={this.toogleMovieModal}
              />
            </div>
            {this.state.showMovieModal && (
              <div className="settings-menu">
                <div
                  className="favourite-movie settings-menuItem"
                  onClick={this.updateFavouriteMovies}
                >
                  {this.isFavourite(movies.favouriteMovies) ? (
                    <Star />
                  ) : (
                    <StarBorder />
                  )}
                  <span className="settings-title">Избранное</span>
                </div>
                <div
                  className="willWatch-movie settings-menuItem"
                  onClick={this.updateWatchlist}
                >
                  {this.isFavourite(movies.watchlist) ? (
                    <Bookmark />
                  ) : (
                    <BookmarkBorder />
                  )}
                  <span className="settings-title">Посмотреть</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(MovieItem)
