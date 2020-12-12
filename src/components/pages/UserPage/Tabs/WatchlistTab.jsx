import React from 'react'
import { Link } from 'react-router-dom'
import { Star, StarBorder, Bookmark, BookmarkBorder } from '@material-ui/icons'
import { months } from '../../../../data/months'
import { withAuth } from '../../../../hoc/WithAuth.jsx'

const WatchlistTab = (props) => {
  const getMonthNameOnMonthNumber = (movie) => {
    return months.filter((month) => {
      return month.month === movie.release_date.substr(5, 2)
    })
  }

  const forEachFavouriteMoviesOrWatchlist = (moviesArr, movie) => {
    let starMovie = false

    moviesArr.forEach((item) => {
      if (item.id === movie.id) {
        starMovie = true
      }
    })

    return starMovie
  }

  const { auth, moviesActions, movies } = props
  return (
    <div className="favourite-movies-tab">
      <div className="favourite-movies">
        {movies.watchlist.map((movie) => {
          const releaseDate = `${movie.release_date.substr(8, 2)} ${
            getMonthNameOnMonthNumber(movie)[0].shortName
          } ${movie.release_date.substr(0, 4)}`
          return (
            <div className="favourite-movies__item" key={movie.id}>
              <div className="poster-img">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="poster-img__image"
                />
              </div>
              <div className="description">
                <div className="description__top-block">
                  <div className="rate">
                    {String(movie.vote_average).length === 1
                      ? `${movie.vote_average}.0`
                      : movie.vote_average}
                  </div>
                  <div className="title">
                    <p className="movie-name">
                      <Link to={`/kinopoisk/movie/${movie.id}`}>
                        {movie.title}
                      </Link>
                    </p>
                    <p className="release-date">{releaseDate}</p>
                  </div>
                </div>
                <div className="description__middle-block">
                  <div className="movie-overview">
                    <p className="text">{movie.overview}</p>
                  </div>
                </div>
                <div className="description__bottom-block">
                  <div
                    className="favourite cursor-pointer"
                    onClick={() => {
                      moviesActions.updateFavouriteMovies({
                        account_id: auth.account_id,
                        session_id: auth.session_id,
                        media_id: movie.id,
                      })
                    }}
                  >
                    <div className="icon">
                      {forEachFavouriteMoviesOrWatchlist(
                        props.movies.favouriteMovies,
                        movie
                      ) ? (
                        <Star />
                      ) : (
                        <StarBorder />
                      )}
                    </div>
                    <span className="settings-title">Избранное</span>
                  </div>
                  <div
                    className="watchlist cursor-pointer"
                    onClick={() => {
                      moviesActions.updateWatchlist({
                        account_id: auth.account_id,
                        session_id: auth.session_id,
                        media_id: movie.id,
                      })
                    }}
                  >
                    <div className="icon">
                      {forEachFavouriteMoviesOrWatchlist(
                        props.movies.watchlist,
                        movie
                      ) ? (
                        <Bookmark />
                      ) : (
                        <BookmarkBorder />
                      )}
                    </div>
                    <span className="settings-title">Посмотреть</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default withAuth(WatchlistTab)
