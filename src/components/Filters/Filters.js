import React from 'react'
import SortBy from './SortBy'

class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by },
      onChangeFilters,
      page,
      onChangePage,
    } = this.props

    return (
      <>
        <form className="mb-3">
          <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
          <div className="form-group">
            <button
              type="button"
              className="btn btn-light"
              onClick={onChangePage.bind(null, page - 1)}
              disabled={page === 1}
            >
              Назад
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={onChangePage.bind(null, page + 1)}
            >
              Вперед
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default Filters
