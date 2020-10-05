import React from 'react'
import CallApi from '../../../utils/apies'

export default class MoviePage extends React.Component {
  constructor() {
    super()

    this.state = {
      movie: {},
    }
  }
  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`, {
      params: {
        language: 'ru-RU',
      },
    }).then((data) => this.setState({ movie: data }))
  }
  render() {
    const { movie } = this.state

    return <div>{movie.title}</div>
  }
}
