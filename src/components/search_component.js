import React, { Component } from 'react'

import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'
import InputComponent from './input_component'

export default class SearchComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTxt: 'toronto',
      checkInDate: '2017-12-2',
      checkOutDate: '2017-12-20'
    }
  }

  _onSubmit () {
    const { searchTxt, checkInDate, checkOutDate } = this.state
    this.props.onSubmit(searchTxt, checkInDate, checkOutDate)
  }

  render () {
    const { searchTxt, checkInDate, checkOutDate } = this.state
    const { fetching } = this.props
    return (
      <div>
        <InputComponent
          id='search_txt'
          value={searchTxt}
          onChange={(e) => { this.setState({ searchTxt: e.target.value }) }}
          label='Search By City'
        />

        <InputComponent
          id='checkIn_date'
          value={checkInDate}
          onChange={(e) => { this.setState({ checkInDate: e.target.value }) }}
          label='Check-In'
        />

        <InputComponent
          id='checkOut_date'
          value={checkOutDate}
          onChange={(e) => { this.setState({ checkOutDate: e.target.value }) }}
          label='Check-Out'
        />
        <Button
          disabled={fetching}
          onClick={() => { this._onSubmit() }}
          raised
          dense>
          <SearchIcon />
        </Button>
      </div>
    )
  }
}
