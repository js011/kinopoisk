import * as types from './filters.types'

const initialState = {
  sort_by: 'popularity.desc',
  primary_release_year: new Date().getFullYear(),
  with_genres: [],
  page: 1,
  total_pages: 500,
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case types.ONCHANGE_FILTERS:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case types.ONCHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    case types.ONCHANGE_TOTAL_PAGES:
      return {
        ...state,
        total_pages: action.payload,
      }
    case types.RESET_FILTERS:
      return (state = initialState)
    default:
      return state
  }
}
