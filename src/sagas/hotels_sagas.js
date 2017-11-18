import { all, put, call } from 'redux-saga/effects'

import HotelsActions from '../actions/hotels_actions'

export function * fetchHotels (api, { city, checkInDate, checkOutDate }) {
  yield put(HotelsActions.requestStarted())

  const args = { city, checkin: checkInDate, checkout: checkOutDate }
  const [snapResponse, retailResponse] = yield all([
    call(api.fetchHotels, { ...args, provider: 'snaptravel' }),
    call(api.fetchHotels, { ...args, provider: 'retail' })
  ])

  yield put(HotelsActions.requestCompleted())

  if (snapResponse.ok && retailResponse.ok) {
    yield put(HotelsActions.set({ snap: snapResponse.data.hotels, retail: retailResponse.data.hotels }))
  } else if (!snapResponse.ok) {
    yield put(HotelsActions.fetchFailed(snapResponse.data))
  } else if (!retailResponse.ok) {
    yield put(HotelsActions.fetchFailed(retailResponse.data))
  }
}
