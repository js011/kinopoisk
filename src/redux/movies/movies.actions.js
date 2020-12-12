import CallApi from '../../utils/apies'
import * as types from './movies.types'

export const fetchFavouriteMovies = ({ session_id, account_id }) => (
  dispatch
) => {
  dispatch({
    type: types.FETCH_REQUEST_FAVOURITE_MOVIES,
  })
  CallApi.get(`/account/${account_id}/favorite/movies`, {
    params: { session_id, language: 'ru-RU' },
  })
    .then((favouriteMovies) => {
      dispatch({
        type: types.FETCH_SUCCESS_FAVOURITE_MOVIES,
        payload: favouriteMovies,
      })
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ERROR_FAVOURITE_MOVIES,
        payload: error,
      })
    })
}

export const fetchWatchlist = ({ session_id, account_id }) => (dispatch) => {
  dispatch({
    type: types.FETCH_REQUEST_WATCHLIST,
  })
  CallApi.get(`/account/${account_id}/watchlist/movies`, {
    params: { session_id, language: 'ru-RU' },
  })
    .then((watchlist) => {
      dispatch({
        type: types.FETCH_SUCCESS_WATCHLIST,
        payload: watchlist,
      })
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ERROR_WATCHLIST,
        payload: error,
      })
    })
}

export const clearFavouriteMoviesAndWatchList = () => ({
  type: types.CLEAR_FAVOURITE_MOVIES_AND_WATCHLIST,
})

export const updateFavouriteMovies = ({ account_id, session_id, media_id }) => (
  dispatch,
  getState
) => {
  let favorite = true
  for (let i = 0; i < getState().movies.favouriteMovies.length; i++) {
    if (Number(getState().movies.favouriteMovies[i].id) === Number(media_id)) {
      favorite = false
    }
  }
  CallApi.post(`/account/${account_id}/favorite`, {
    params: {
      session_id,
      language: 'ru-RU',
    },
    body: {
      media_type: 'movie',
      media_id,
      favorite,
    },
  })
    .then(() => {
      return CallApi.get(`/account/${account_id}/favorite/movies`, {
        params: { session_id, language: 'ru-RU' },
      }).then((favouriteMovies) => {
        dispatch({
          type: types.UPDATE_SUCCESS_FAVOURITE_MOVIES,
          payload: favouriteMovies,
        })
      })
    })
    .catch(() => {
      dispatch({
        type: types.UPDATE_ERROR_FAVOURITE_MOVIES,
      })
    })
}

export const updateWatchlist = ({ account_id, session_id, media_id }) => (
  dispatch,
  getState
) => {
  let watchlist = true
  for (let i = 0; i < getState().movies.watchlist.length; i++) {
    if (Number(getState().movies.watchlist[i].id) === Number(media_id)) {
      watchlist = false
    }
  }
  CallApi.post(`/account/${account_id}/watchlist`, {
    params: {
      session_id,
      language: 'ru-RU',
    },
    body: {
      media_type: 'movie',
      media_id,
      watchlist,
    },
  })
    .then(() => {
      return CallApi.get(`/account/${account_id}/watchlist/movies`, {
        params: { session_id, language: 'ru-RU' },
      }).then((watchlist) => {
        dispatch({
          type: types.UPDATE_SUCCESS_WATCHLIST,
          payload: watchlist,
        })
      })
    })
    .catch(() => {
      dispatch({
        type: types.UPDATE_ERROR_WATCHLIST,
      })
    })
}