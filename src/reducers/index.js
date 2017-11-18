import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import configureStore from './createStore'
import rootSaga from '../sagas'
import createHistory from 'history/createBrowserHistory'

/* ------------- Reducers ------------- */
import hotels from './hotels_reducer'

export const history = createHistory()

export const rootReducer = combineReducers({
  routing: routerReducer,
  hotels
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(rootReducer, rootSaga, history)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
