import { combineReducers } from 'redux'
import authReducer from '../redux/auth/auth.reducer'
import moviesReducer from '../redux/movies/movies.reducer'

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
})
