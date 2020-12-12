import React from 'react'
import Filters from '../../Filters/Filters.jsx'
import MoviesList from '../../Movies/MoviesList.jsx'
import { withFilters } from '../../../hoc/WithFilters.jsx'

class MoviesPage extends React.Component {
  render() {
    const { filters, filtersActions } = this.props
    return (
      <div className="main container">
        <div className="row">
          <div className="filters col-3">
            <Filters />
          </div>
          <div className="movies col-9">
            <MoviesList
              filters={filters}
              page={filters.page}
              onChangePage={filtersActions.onChangePage}
              onChangeTotalPages={filtersActions.onChangeTotalPages}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withFilters(MoviesPage)
