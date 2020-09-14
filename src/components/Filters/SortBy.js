import React from 'react'
import PropTypes from 'prop-types'

export default class SortBy extends React.PureComponent {
  static propTypes = {
    sort_by: PropTypes.string.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
  }

  static defaultProps = {
    sortByOptions: [
      {
        label: 'Популярные (убывание)',
        value: 'popularity.desc',
      },
      {
        label: 'Популярные (возростание)',
        value: 'popularity.asc',
      },
      {
        label: 'Рейтинг (убывание)',
        value: 'vote_average.desc',
      },
      {
        label: 'Рейтинг (возростание)',
        value: 'vote_average.asc',
      },
    ],
  }

  render() {
    const { sort_by, onChangeFilters, sortByOptions } = this.props

    return (
        <select
          className="form-control"
          name="sort_by"
          id="sort_by"
          value={sort_by}
          onChange={onChangeFilters}
        >
          {sortByOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    )
  }
}
