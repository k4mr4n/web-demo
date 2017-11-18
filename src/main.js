import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './reducers'
import App from './containers/app_container'

// we don't need it cause we use styled-components instead!
// import './styles/main.sass'

const target = document.querySelector('#root')

render(
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
