import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './App.css'
import { App } from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('kinopoisk')
)
