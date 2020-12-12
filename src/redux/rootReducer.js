import { combineReducers } from 'redux'
import authReducer from '../redux/auth/auth.reducer'
import moviesReducer from '../redux/movies/movies.reducer'
import filtersReducer from '../redux/filters/filters.reducer'

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  filters: filtersReducer,
})
