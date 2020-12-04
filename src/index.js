import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import WebFont from 'webfontloader'
import store from './redux/store'

WebFont.load({
  google: {
    families: ['Open Sans'],
  },
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('kinopoisk')
)

serviceWorker.unregister()
