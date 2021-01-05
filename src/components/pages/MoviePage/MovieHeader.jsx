import React from 'react'
import { Star, StarBorder, Bookmark, BookmarkBorder } from '@material-ui/icons'
import { api_img_url } from '../../../utils/apies'

const forEachGenresCompaniesCountries = (arr = []) => {
  let resultArr = []

  arr.forEach((item) => {
    resultArr.push(item.name)
  })

  return resultArr
}

const isFavourite = (movies = [], movie = {}) => {
  return movies.findIndex((m) => m.id === movie.id) !== -1
}

const getBackgropImage = (movie) => {
  if (!movie.backdrop_path) {
    return '/kinopoisk/images/not-found-backdrop.jpg'
  }

  const path = movie.belongs_to_collection
    ? movie.belongs_to_collection.backdrop_path
    : movie.backdrop_path

  return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${path}`
}

export const MovieHeader = (props) => {
  const { movie, movies, moviesActions, auth, authActions } = props

  const favoriteHandleClick = () => {
    if (auth.user) {
      moviesActions.updateFavouriteMovies({
        account_id: auth.account_id,
        session_id: auth.session_id,
        media_id: movie.id,
      })
    } else {
      authActions.toggleAuthFormModal(true)
    }
  }

  const watchlistHandleClick = () => {
    if (auth.user) {
      moviesActions.updateWatchlist({
        account_id: auth.account_id,
        session_id: auth.session_id,
        media_id: movie.id,
      })
    } else {
      authActions.toggleAuthFormModal(true)
    }
  }

  return (
    <div className="movie-header">
      <div className="movie-header__custom-bg text-right">
        <img
          src={getBackgropImage(movie)}
          alt=""
          height="512"
          className="movie-header__bg-img"
        />
      </div>
      <div className="movie-header__single-column">
        <div className="movie-header__content-wrapper h-100">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-4 pr-0 d-flex align-items-center h-100">
                <img
                  src={
                    movie.poster_path
                      ? `${api_img_url}${movie.poster_path}`
                      : `/kinopoisk/images/not-foundPoster.png`
                  }
                  width="290"
                  height="435"
                  alt=""
                  className="movie-header__poster-img rounded-lg"
                />
              </div>
              <div className="col-8 pl-0 text-left d-flex justify-content-center flex-column h-100">
                <div className="movie-header__description">
                  <h2 className="movie-header__title mb-0">
                    {movie.title} ( {movie.original_title} )
                  </h2>
                  <p className="movie-header__tagline mb-0">{movie.tagline}</p>
                  <div className="d-flex align-items-center mt-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="movie-header__rate d-flex justify-content-center align-items-center rounded-circle">
                        {String(movie.vote_average).length === 1
                          ? `${movie.vote_average}.0`
                          : movie.vote_average}
                      </div>
                      <p className="mb-0 pl-3" style={{ lineHeight: '18px' }}>
                        Пользовательский <br /> счёт
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        className="ml-4 movie-header__favourite cursor-pointer d-flex justify-content-center align-items-center rounded-circle"
                        onClick={favoriteHandleClick}
                      >
                        {isFavourite(movies.favouriteMovies, movie) ? (
                          <Star />
                        ) : (
                          <StarBorder />
                        )}
                      </div>
                      <div
                        className="ml-2 movie-header__watchlist cursor-pointer d-flex justify-content-center align-items-center rounded-circle"
                        onClick={watchlistHandleClick}
                      >
                        {isFavourite(movies.watchlist, movie) ? (
                          <Bookmark />
                        ) : (
                          <BookmarkBorder />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mb-1">
                    <span className="font-weight-bold">Статус</span> -{' '}
                    {movie.status}
                  </p>
                  <p className="mb-1">
                    <span className="font-weight-bold">Дата выхода</span> -{' '}
                    {movie.release_date}
                  </p>
                  <p className="mb-1">
                    <span className="font-weight-bold">Жанры</span> -{' '}
                    {forEachGenresCompaniesCountries(movie.genres).join(', ')}
                  </p>
                  <p className="mb-1">
                    <span className="font-weight-bold">Язык оригинала</span> -{' '}
                    {movie.original_language}
                  </p>
                  <p className="mb-1">
                    <span className="font-weight-bold">Компания</span> -{' '}
                    {forEachGenresCompaniesCountries(
                      movie.production_companies
                    ).join(', ')}
                  </p>
                  <p className="mb-3">
                    <span className="font-weight-bold">Страна</span> -{' '}
                    {forEachGenresCompaniesCountries(
                      movie.production_countries
                    ).join(', ')}
                  </p>
                  <h4 className="mb-1">Обзор</h4>
                  <p className="text-max-5-line mb-0">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
