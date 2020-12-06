import * as types from './movies.types'

const initialState = {
  favouriteMovies: [],
  watchlist: [],
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS_FAVOURITE_MOVIES:
      return {
        ...state,
        favouriteMovies: action.payload.results,
      }
    case types.FETCH_SUCCESS_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload.results,
      }
    case types.CLEAR_FAVOURITE_MOVIES_AND_WATCHLIST:
      return {
        ...state,
        favouriteMovies: [],
        watchlist: [],
      }
    default:
      return state
  }
}
