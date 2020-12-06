import * as types from './auth.types'
import { cookies } from '../../utils/cookies'

const initialState = {
  user: null,
  session_id: cookies.get('session_id'),
  account_id: cookies.get('account_id'),
  isAuth: false,
  showUserModal: false,
  showAuthFormModal: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_AUTH:
      cookies.set('session_id', action.payload.session_id, {
        path: '/',
        maxAge: 2592000,
      })
      return {
        ...state,
        user: action.payload.user,
        session_id: action.payload.session_id,
        account_id: action.payload.user.id,
        isAuth: true,
        showUserModal: false,
        showAuthFormModal: false,
      }
    case types.LOGOUT:
      cookies.remove('session_id')
      return {
        ...state,
        user: null,
        session_id: null,
        account_id: null,
        isAuth: false,
        showUserModal: false,
        showAuthFormModal: false,
      }
    case types.TOGGLE_USER_MODAL:
      return {
        ...state,
        showUserModal: action.payload,
      }
    case types.TOGGLE_AUTH_FORM_MODAL:
      return {
        ...state,
        showAuthFormModal: action.payload,
      }
    default:
      return state
  }
}
