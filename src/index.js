import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import WebFont from 'webfontloader'
import store from './store/store'
// import {
//   actionCreatorUpdateAuth,
//   actionCreatorLogOut,
// } from './store/actionCreators/actionCreators'

WebFont.load({
  google: {
    families: ['Open Sans'],
  },
})

// store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(
//   actionCreatorUpdateAuth({
//     user: { name: 'Vadim' },
//     session_id: 12321031,
//   })
// )

// store.dispatch(actionCreatorLogOut())

ReactDOM.render(<App store={store} />, document.getElementById('kinopoisk'))

serviceWorker.unregister()
