import { createReducer } from 'reduxsauce'
import { HotelsTypes as Types } from '../actions/hotels_actions'
import SortConstants from '../constants/sort_constants'

export const INITIAL_STATE = {
  fetching: false,
  list: [],
  error: ''
}

const setRequestStarted = state => ({ ...state, fetching: true })
const setRequestCompleted = state => ({ ...state, fetching: false })

const fetchFailed = (state, { error }) => ({ ...state, error })

const set = (state, { payload: { snap: snapHotels, retail: retailHotels } }) => {
  const jointHotelsList = snapHotels.reduce((jointHotels, curr) => {
    const sameInRetail = retailHotels.find(r => r.id === curr.id)
    if (sameInRetail) {
      jointHotels = [...jointHotels, { ...curr, _retailDetails: sameInRetail }]
    }
    return jointHotels
  }, [])

  return { ...state, error: '', list: jointHotelsList }
}

const sort = (state, { sortBy, sortType }) => {
  let newList = []
  if (sortBy === SortConstants.SAVING) {
    newList = [...state.list].sort((a, b) => {
      const aSaving = a._retailDetails.price - a.price
      const bSaving = b._retailDetails.price - b.price
      return aSaving - bSaving
    })
  } else {
    let prop = ''
    switch (sortBy) {
      case SortConstants.PRICE:
        prop = 'price'
        break
      case SortConstants.RATING:
        prop = 'num_reviews'
        break
    }
    newList = [...state.list].sort((a, b) => a[prop] - b[prop])
  }
  if (sortType === 'asc') {
    newList.reverse()
  }
  return { ...state, list: newList }
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET]: set,
  [Types.SORT]: sort,
  [Types.FETCH_FAILED]: fetchFailed,
  [Types.REQUEST_STARTED]: setRequestStarted,
  [Types.REQUEST_COMPLETED]: setRequestCompleted
})

export default reducer
