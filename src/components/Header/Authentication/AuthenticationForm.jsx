import React from 'react'
import { api_url, api_key_movieDB_v3, fetchApi } from '../../../utils/apies'
import classNames from 'classnames'

export default class AuthenticationForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: 'vadim_.iva._._',
      password: 'Diamond621',
      repeatPassword: 'Diamond621',
      submitting: false,
      errors: {},
    }
  }

  getUser = async () => {
    this.setState({
      submitting: true,
    })

    fetchApi(
      `${api_url}/authentication/token/new?api_key=${api_key_movieDB_v3}`
    )
      .then((data) => {
        return fetchApi(
          `${api_url}/authentication/token/validate_with_login?api_key=${api_key_movieDB_v3}`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
              request_token: data.request_token,
            }),
          }
        )
      })
      .then((data) => {
        return fetchApi(
          `${api_url}/authentication/session/new?api_key=${api_key_movieDB_v3}`,
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              request_token: data.request_token,
            }),
          }
        )
      })
      .then((data) => {
        this.props.updateSessionId(data.session_id)
        return fetchApi(
          `${api_url}/account?api_key=${api_key_movieDB_v3}&session_id=${data.session_id}`
        )
      })
      .then((user) => {
        this.setState(
          {
            submitting: false,
          },
          () => {
            this.props.updateUser(user)
          }
        )
      })
      .catch((error) => {
        console.log('error', error)

        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            base: error.status_message,
          },
          submitting: false,
        }))
      })

    // try {
    //   const token = await fetchApi(
    //     `${api_url}/authentication/token/new?api_key=${api_key_movieDB_v3}`
    //   )

    //   const validateTokenWithLogin = await fetchApi(
    //     `${api_url}/authentication/token/validate_with_login?api_key=${api_key_movieDB_v3}`,
    //     {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username: 'vadim_.iva._._',
    //         password: 'Diamond621',
    //         request_token: token.request_token,
    //       }),
    //     }
    //   )

    //   const { session_id } = await fetchApi(
    //     `${api_url}/authentication/session/new?api_key=${api_key_movieDB_v3}`,
    //     {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         request_token: validateTokenWithLogin.request_token,
    //       }),
    //     }
    //   )

    //   const user = await fetchApi(
    //     `${api_url}/account?api_key=${api_key_movieDB_v3}&session_id=${session_id}`
    //   )
    // } catch (error) {}
  }

  validateErrors = () => {
    const errors = {}

    if (this.state.username.length < 5) {
      errors.username = 'Укажите логин, минимум 5 значений'
    }
    if (this.state.password.length < 6) {
      errors.password = 'Укажите пароль, минимум 6 зачений'
    }
    if (String(this.state.password) !== String(this.state.repeatPassword)) {
      errors.repeatPassword = 'Пароли не идентичны'
    }

    return errors
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: null,
        base: null,
      },
    }))
  }

  handleBlur = () => {
    const errors = this.validateErrors()

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: { ...errors },
      })
    } else {
      this.setState({
        errors: {},
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const errors = this.validateErrors()

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: { ...errors },
      })
    } else {
      this.getUser()
    }
  }

  getClassForInpur = (errorName) => {
    return classNames('form-control', {
      invalid: this.state.errors[errorName],
    })
  }

  render() {
    const {
      username,
      password,
      repeatPassword,
      submitting,
      errors,
    } = this.state
    return (
      <form
        className="form-group login-form container pl-4 pr-4"
        onSubmit={this.onSubmit}
      >
        <div className="login-form__title">Авторизация</div>
        <label htmlFor="username">Логин:</label>
        <input
          className={this.getClassForInpur('username')}
          type="text"
          placeholder="Логин"
          id="username"
          name="username"
          value={username}
          onChange={this.onChange}
          onBlur={this.handleBlur}
        />
        {errors.username && (
          <div className="invalid-feedback pl-2">{errors.username}</div>
        )}
        <label htmlFor="password" className="mt-2">
          Пароль:
        </label>
        <input
          className={this.getClassForInpur('password')}
          type="password"
          placeholder="Пароль"
          id="password"
          name="password"
          value={password}
          onChange={this.onChange}
          onBlur={this.handleBlur}
        />
        {errors.password && (
          <div className="invalid-feedback pl-2">{errors.password}</div>
        )}
        <label htmlFor="repeatPassword" className="mt-2">
          Повторите пароль:
        </label>
        <input
          className={this.getClassForInpur('repeatPassword')}
          type="password"
          placeholder="Пароль"
          id="repeatPassword"
          name="repeatPassword"
          value={repeatPassword}
          onChange={this.onChange}
          onBlur={this.handleBlur}
        />
        {errors.repeatPassword && (
          <div className="invalid-feedback pl-2">{errors.repeatPassword}</div>
        )}
        <button
          type="submit"
          className="btn btn-success text-center col-12 mt-4 pb-2"
          disabled={submitting}
        >
          Отправить
        </button>
        <div className="invalid-feedback pl-2 mt-2 text-center">
          {errors.base}
        </div>
      </form>
    )
  }
}
