import React from 'react'
import CallApi from '../../../utils/apies'
import classNames from 'classnames'
import AppContextHOC from '../../HOC/AppContextHOC.jsx'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class AuthenticationForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      submitting: false,
      errors: {},
    }
  }

  getUser = () => {
    this.setState({
      submitting: true,
    })

    CallApi.get('/authentication/token/new')
      .then((data) => {
        return CallApi.post('/authentication/token/validate_with_login', {
          body: {
            username: this.state.username,
            password: this.state.password,
            request_token: data.request_token,
          },
        })
      })
      .then((data) => {
        return CallApi.post('/authentication/session/new', {
          body: { request_token: data.request_token },
        })
      })
      .then((data) => {
        cookies.set('session_id', data.session_id, {
          path: '/',
          maxAge: 2592000,
        })
        return CallApi.get('/account', {
          params: { session_id: data.session_id },
        })
      })
      .then((user) => {
        this.setState(
          {
            submitting: false,
          },
          () => {
            this.props.updateAuth({
              user,
              session_id: cookies.get('session_id'),
            })
          }
        )
      })
      .catch((error) => {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            base: error.status_message,
          },
          submitting: false,
        }))
      })
  }

  validateFields = () => {
    const errors = {}

    if (this.state.username.length < 5) {
      errors.username = 'Укажите логин, минимум 5 значений'
    }
    if (this.state.password.length < 6) {
      errors.password = 'Укажите пароль, минимум 6 зачений'
    }
    if (this.state.password !== this.state.repeatPassword) {
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

  handleBlur = (e) => {
    const { name } = e.target
    const errors = this.validateFields()
    const error = errors[name]

    if (Object.keys(errors).length > 0) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, [name]: error },
      }))
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const errors = this.validateFields()

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

export default AppContextHOC(AuthenticationForm)
