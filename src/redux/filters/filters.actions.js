import * as types from './filters.types'

export const onChangeFilters = (e) => {
  const { name, value } = e.target

  return {
    type: types.ONCHANGE_FILTERS,
    payload: {
      name,
      value,
    },
  }
}

export const onChangePage = (page) => {
  return {
    type: types.ONCHANGE_PAGE,
    payload: page,
  }
}

export const resetFilters = () => {
  return {
    type: types.RESET_FILTERS,
  }
}

export const onChangeTotalPages = (total_pages) => {
  return {
    type: types.ONCHANGE_TOTAL_PAGES,
    payload: total_pages,
  }
}
