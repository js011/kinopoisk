import React from 'react'
import { primary_release_year } from '../../data/primary_release_year'

export default class PrimaryReleaseYear extends React.Component {
  static defaultProps = {
    primary_release_year_options: [...primary_release_year],
  }
  render() {
    const {
      primary_release_year_options,
      primary_release_year,
      onChangeFilters,
    } = this.props

    return (
      <>
        <label
          className="filters-label primary-release-year"
          htmlFor="primary_release_year"
        >
          Дата выхода
        </label>
        <select
          className="form-control"
          name="primary_release_year"
          id="primary_release_year"
          value={primary_release_year}
          onChange={onChangeFilters}
        >
          {primary_release_year_options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    )
  }
}
