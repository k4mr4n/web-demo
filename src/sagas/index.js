import { takeLatest, all } from 'redux-saga/effects'
import API from '../api'

/* ------------- Types ------------- */

import { HotelsTypes } from '../actions/hotels_actions'

/* ------------- Sagas ------------- */

import { fetchHotels } from './hotels_sagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(HotelsTypes.FETCH, fetchHotels, api)
  ])
}
