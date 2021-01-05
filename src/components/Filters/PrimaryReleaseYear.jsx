import React from 'react'

const getYears = () => {
  const currentYear = new Date().getFullYear()

  return Array.from(new Array(70), (value, index) => currentYear - index)
}

const years = getYears()

export default class PrimaryReleaseYear extends React.Component {
  render() {
    const { primary_release_year, onChangeFilters } = this.props

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
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </>
    )
  }
}
