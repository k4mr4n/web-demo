import React, { Component } from 'react'
import { connect } from 'react-redux'

import HotelsActions from '../actions/hotels_actions'

import SearchComponent from '../components/search_component'

class SearchContainer extends Component {
  render () {
    const { onSubmit, fetching } = this.props
    return (
      <SearchComponent
        fetching={fetching}
        onSubmit={onSubmit}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  fetching: state.hotels.fetching
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (city, checkInDate, checkOutDate) => dispatch(HotelsActions.fetch(city, checkInDate, checkOutDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
