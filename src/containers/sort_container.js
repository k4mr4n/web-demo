import React, { Component } from 'react'
import { connect } from 'react-redux'

import HotelsActions from '../actions/hotels_actions'
import SortConstants from '../constants/sort_constants'

import SortComponent from '../components/sort_component'

const SortObj = [
  {
    label: 'Price',
    key: SortConstants.PRICE
  },
  {
    label: 'Rating',
    key: SortConstants.RATING
  },
  {
    label: 'Savings',
    key: SortConstants.SAVING
  }
]

class SortContainer extends Component {
  componentDidMount () {
    // initial Sorting!
    this.props.sort(SortConstants.PRICE, SortConstants.ASC)
  }

  render () {
    const { sort } = this.props
    return (
      <SortComponent
        onChange={(sortBy, sortType) => { sort(sortBy, sortType) }}
        SortObj={SortObj} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sort: (sortBy, sortType) => dispatch(HotelsActions.sort(sortBy, sortType))
})

export default connect(null, mapDispatchToProps)(SortContainer)
