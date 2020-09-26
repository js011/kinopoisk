import React from 'react'
import SortBy from './SortBy.jsx'
import Pagination from './Pagination.jsx'
import PrimaryReleaseYear from './PrimaryReleaseYear.jsx'
import Genres from './Genres.jsx'
import { api_key_movieDB_v3 } from '../../utils/apies'

class Filters extends React.Component {
  constructor() {
    super()
    this.state = {
      allGenres: [],
    }
  }

  componentDidMount() {
    const link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key_movieDB_v3}&language=ru-RU`
    return fetch(link)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ allGenres: data })
      })
  }

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
              allGenres={
                this.state.allGenres.genres !== undefined
                  ? this.state.allGenres.genres
                  : []
              }
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
