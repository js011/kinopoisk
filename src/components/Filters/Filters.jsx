import React from 'react'
import SortBy from './SortBy.jsx'
import Pagination from './Pagination.jsx'
import PrimaryReleaseYear from './PrimaryReleaseYear.jsx'
import Genres from './Genres/GenresContainer.jsx'
import { withFilters } from '../../hoc/WithFilters.jsx'

class Filters extends React.Component {
  render() {
    const { filters, filtersActions } = this.props

    return (
      <>
        <form className="mb-3">
          <div className="sort form-group">
            <label className="filters-label" htmlFor="sort_by">
              Сортировать
            </label>
            <SortBy
              sort_by={filters.sort_by}
              onChangeFilters={filtersActions.onChangeFilters}
            />
          </div>
          <Pagination
            total_pages={filters.total_pages}
            onChangePage={filtersActions.onChangePage}
            page={filters.page}
          />
          <div className="sort form-group mt-3">
            <label className="filters-label" htmlFor="sort_by">
              Фильтровать
            </label>
            <PrimaryReleaseYear
              primary_release_year={filters.primary_release_year}
              onChangeFilters={filtersActions.onChangeFilters}
            />
            <Genres
              with_genres={filters.with_genres}
              onChangeFilters={filtersActions.onChangeFilters}
            />
            <button
              onClick={filtersActions.resetFilters}
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

export default withFilters(Filters)
