import React from 'react'
import SortBy from './SortBy'
import PrimaryReleaseYear from './PrimaryReleaseYear'
import Pagination from './Pagination'

class Filters extends React.Component {
  render() {
    const {
      filters: { sort_by, primary_release_year },
      onChangeFilters,
      page,
      onChangePage,
      total_pages,
    } = this.props

    return (
      <>
        <form className="mb-3">
          <div className="sort form-group">
            <label className="filters-label" htmlFor="sort_by">
              Сортировать
            </label>
            <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />
          </div>
          <Pagination
            total_pages={total_pages}
            onChangePage={onChangePage}
            page={page}
          />
          <div className="sort form-group mt-3">
            <label className="filters-label" htmlFor="sort_by">
              Фильтровать
            </label>
            <PrimaryReleaseYear
              primary_release_year={primary_release_year}
              onChangeFilters={onChangeFilters}
            />
          </div>
        </form>
      </>
    )
  }
}

export default Filters
