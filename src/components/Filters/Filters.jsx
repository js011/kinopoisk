import React from 'react'
import SortBy from './SortBy.jsx'
import Pagination from './Pagination.jsx'
import PrimaryReleaseYear from './PrimaryReleaseYear.jsx'
import Genres from './Genres/GenresContainer.jsx'

class Filters extends React.Component {
  render() {
    const {
      filters,
      onChangeFilters,
      page,
      onChangePage,
      total_pages,
      resetFilters,
    } = this.props

    return (
      <>
        <form className="mb-3">
          <div className="sort form-group">
            <label className="filters-label" htmlFor="sort_by">
              Сортировать
            </label>
            <SortBy
              sort_by={filters.sort_by}
              onChangeFilters={onChangeFilters}
            />
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
              primary_release_year={filters.primary_release_year}
              onChangeFilters={onChangeFilters}
            />
            <Genres
              with_genres={filters.with_genres}
              onChangeFilters={onChangeFilters}
            />
            <button
              onClick={resetFilters}
              className="btn btn-light col-12 mt-2"
              type="button"
              style={{ background: '#e2e6ea' }}
            >
              Сбросить фильтры
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default Filters
