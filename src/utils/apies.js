import React from 'react'
import queryString from 'query-string'

export const api_url = 'https://api.themoviedb.org/3'

export const api_img_url = 'https://image.tmdb.org/t/p/w500'

export const api_key_movieDB_v3 = '2bf9f43ff01f800a4b2838b95fcce99e'

export const api_key_movieDB_v4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmY5ZjQzZmYwMWY4MDBhNGIyODM4Yjk1ZmNjZTk5ZSIsInN1YiI6IjVjZTkyOWU3YzNhMzY4MWM0ZTFlODRkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fffZy6W_ZCD20rApqm9asph-hWYo_w8zjvPNLyZf-wY'

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status < 400) {
          return resolve(response.json())
        } else {
          throw response
        }
      })
      .catch((response) => response.json().then((error) => reject(error)))
  })
}

export default class CallApi extends React.Component {
  static get(url, options = {}) {
    const { params } = options

    const queryStringParams = {
      api_key: api_key_movieDB_v3,
      ...params,
    }

    return fetchApi(
      `${api_url}${url}?${queryString.stringify(queryStringParams)}`,
      {
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
  }
  static post(url, options = {}) {
    const { params, body } = options

    const queryStringParams = {
      api_key: api_key_movieDB_v3,
      ...params,
    }

    return fetchApi(
      `${api_url}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )
  }
  static delete(url, options = {}) {
    const { params, body } = options

    const queryStringParams = {
      api_key: api_key_movieDB_v3,
      ...params,
    }

    return fetchApi(
      `${api_url}${url}?${queryString.stringify(queryStringParams)}`,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )
  }
}
