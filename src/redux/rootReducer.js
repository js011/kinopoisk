import { combineReducers } from 'redux'
import authReducer from '../redux/auth/auth.reducer'

export default combineReducers({
  auth: authReducer,
})
