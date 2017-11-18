import React from 'react'

import SearchContainer from './search_container'
import HotelsListContainer from './hotel_list_container'

import HeaderComponent from '../components/header_component'

export default () => (
  <div>
    <HeaderComponent />
    <SearchContainer />
    <HotelsListContainer />
  </div>
  )
