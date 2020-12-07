import CallApi from '../../utils/apies'
import * as types from './auth.types'

export const fetchAuth = (session_id) => (dispatch) => {
  dispatch({
    type: types.FETCH_REQUEST_AUTH,
  })
  CallApi.get('/account', { params: { session_id, language: 'ru-RU' } })
    .then((user) => {
      dispatch(updateAuth({ user, session_id }))
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ERROR_AUTH,
        payload: error,
      })
    })
}

export const updateAuth = ({ user, session_id }) => ({
  type: types.UPDATE_AUTH,
  payload: {
    user,
    session_id,
  },
})

export const onLogOut = () => {
  return {
    type: types.LOGOUT,
  }
}

export const toggleUserModal = (movies) => {
  return {
    type: types.TOGGLE_USER_MODAL,
    payload: movies,
  }
}

export const toggleAuthFormModal = (show) => {
  return {
    type: types.TOGGLE_AUTH_FORM_MODAL,
    payload: show,
  }
}
