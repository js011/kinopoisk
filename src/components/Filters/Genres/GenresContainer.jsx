import React from 'react'
import Genres from './Genres'
import { api_key_movieDB_v3 } from '../../../utils/apies'

export default class GenresContainer extends React.PureComponent {
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
        this.setState({ allGenres: data.genres })
      })
  }

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
    return (
      <Genres
        with_genres={this.props.with_genres}
        allGenres={this.state.allGenres}
        onChangeGenres={this.onChangeGenres}
      />
    )
  }
}
