import React from 'react'
import SortBy from './SortBy'
import Pagination from './Pagination'

class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by },
      onChangeFilters,
      page,
      onChangePage,
      total_pages,
    } = this.props

    return (
      <>
        <form className="mb-3">
          <div className="sort form-group">
            <label className="filters-name" htmlFor="sort_by">
              Сортировать
            </label>
            <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
          </div>
          <Pagination
            total_pages={total_pages}
            onChangePage={onChangePage}
            page={page}
          />
        </form>
      </>
    )
  }
}

export default Filters
