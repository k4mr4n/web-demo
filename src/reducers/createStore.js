import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import Config from '../config/debug_config'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga, history) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Redux Logger Middleware ------------- */
  if (Config.reduxLogging) {
    middleware.push(createLogger())
  }

  /* ------------- Router Middleware ------------- */

  middleware.push(routerMiddleware(history))

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
