import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetch: ['city', 'checkInDate', 'checkOutDate'],
  sort: ['sortBy', 'sortType'],
  set: ['payload'],
  fetchFailed: ['error'],
  requestStarted: null,
  requestCompleted: null
}, { prefix: 'HOTELS_' })

export const HotelsTypes = Types
export default Creators
