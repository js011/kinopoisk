import * as types from './auth.types'
import { cookies } from '../../utils/cookies'

const initialState = {
  user: null,
  session_id: cookies.get('session_id'),
  isAuth: false,
  showUserModal: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_AUTH:
      return {
        ...state,
        user: action.payload.user,
        session_id: action.payload.session_id,
        isAuth: true,
        showUserModal: false,
      }
    case types.LOGOUT:
      return {
        ...state,
        user: null,
        session_id: null,
        isAuth: false,
        showUserModal: false,
      }
    case types.TOGGLE_USER_MODAL:
      return {
        ...state,
        showUserModal: !action.payload,
      }
    default:
      return state
  }
}
