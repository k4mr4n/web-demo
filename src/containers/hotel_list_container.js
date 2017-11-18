import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortContainer from './sort_container'

import HotelsListComponent from '../components/hotels_list_component'

class HotelsListContainer extends Component {
  render () {
    const { hotelsList } = this.props
    if (hotelsList.length === 0) return null
    return (
      <div>
        <SortContainer />
        <HotelsListComponent list={hotelsList} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hotelsList: state.hotels.list
})

export default connect(mapStateToProps)(HotelsListContainer)
