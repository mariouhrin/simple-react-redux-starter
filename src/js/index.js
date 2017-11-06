import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

import './../styles/styles.scss'

const rootElement = document.getElementById('root')

/* eslint-disable react/no-render-return-value */
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  )

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}
