import React from 'react'
import CallApi, { api_img_url } from '../../../../utils/apies'

export default class MovieActors extends React.Component {
  constructor() {
    super()

    this.state = {
      actors: [],
    }
  }

  componentDidMount() {
    const { movie_id } = this.props

    CallApi.get(`/movie/${movie_id}/credits`, {
      params: {
        language: 'ru',
      },
    }).then((data) => {
      this.setState(() => ({ actors: data.cast }))
    })
  }

  render() {
    return (
      <div className="actors mt-2 mb-4 d-flex justify-content-between horizontal-scroll">
        {this.state.actors.map((actor) => {
          return (
            <div className="actors__item mr-2" key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${api_img_url}${actor.profile_path}`
                    : '/kinopoisk/images/not-foundPoster.png'
                }
                width="240"
                alt=""
              />
              <div className="actors__description d-flex align-items-center justify-content-center flex-column">
                <h5 className="mb-1">{actor.name}</h5>
                <p className="mb-0 text-max-1-line">Роль - {actor.character}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
