import React from 'react'

export default class Genres extends React.PureComponent {
  onChangeGenres = (e) => {
    const { name, value } = e.target
    const { onChangeFilters, with_genres } = this.props

    if (with_genres.indexOf(String(value)) === -1) {
      onChangeFilters({
        target: { name, value: [...with_genres, value] },
      })
    } else {
      onChangeFilters({
        target: { name, value: with_genres.filter((item) => item !== value) },
      })
    }
  }

  render() {
    const { allGenres, with_genres } = this.props

    return (
      <>
        <label className="filters-label genre-label" htmlFor="with_genres">
          Жанры
        </label>
        <div className="genres" id="with_genres">
          {allGenres.map((item) => {
            return (
              <div className="genres__item" key={item.id}>
                <input
                  type="checkbox"
                  value={item.id}
                  checked={
                    with_genres.indexOf(String(item.id)) === -1 ? false : true
                  }
                  className="genres__item__checkbox"
                  name="with_genres"
                  id={item.id}
                  onChange={this.onChangeGenres}
                />
                <label className="genres__item__label" htmlFor={item.id}>
                  {item.name}
                </label>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
