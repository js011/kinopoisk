import React from 'react'
import PropTypes from 'prop-types'

const Genres = (props) => {
  const { with_genres, allGenres, onChangeGenres } = props
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
                onChange={onChangeGenres}
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

Genres.defaultProps = {
  allGenres: [],
}

Genres.propTypes = {
  allGenres: PropTypes.array.isRequired,
  onChangeGenres: PropTypes.func.isRequired,
  with_genres: PropTypes.array.isRequired,
}

export default Genres
