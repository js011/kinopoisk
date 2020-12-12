import React from 'react'
import CallApi, { api_img_url } from '../../../../utils/apies'

export default class MovieMedia extends React.Component {
  constructor() {
    super()

    this.state = {
      videos: [],
      images: [],
    }
  }
  componentDidMount() {
    const { movie_id } = this.props

    CallApi.get(`/movie/${movie_id}/videos`, {
      params: {
        language: 'ru-RU',
        append_to_response: 'videos',
      },
    }).then((data) => {
      if (data.results.length > 0) {
        this.setState(() => ({ videos: data.results }))
      } else {
        CallApi.get(`/movie/${movie_id}/videos`, {
          params: {
            language: 'en-US',
            append_to_response: 'videos',
          },
        }).then((data) => {
          this.setState(() => ({ videos: data.results }))
        })
      }
    })

    CallApi.get(`/movie/${movie_id}/images`, {
      params: {
        include_image_language: 'ru,en',
      },
    }).then((data) => {
      this.setState(() => ({ images: data.posters }))
    })
  }

  render() {
    const { videos, images } = this.state
    return (
      <>
        <div className="videos mt-3 mb-3">
          <div className="horizontal-scroll d-flex ">
            {videos.map((item) => {
              return (
                <div key={item.id} className="videos__item mr-2">
                  <h5 className="mb-2 text-max-1-line">{item.name}</h5>
                  <iframe
                    title={item.name}
                    width="550"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )
            })}
          </div>
        </div>
        <div className="images mb-4">
          <h3 className="mb-2 mt-2">Галерея</h3>
          <div className="d-flex horizontal-scroll">
            {images.map((item) => {
              return (
                <div className="images__item mr-2" key={item.file_path}>
                  <img
                    src={`${api_img_url}${item.file_path}`}
                    width="210"
                    height="300"
                    alt=""
                  />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
