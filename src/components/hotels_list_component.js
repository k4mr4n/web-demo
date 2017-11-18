import React from 'react'
import styled from 'styled-components'

import HotelRowComponent from './hotel_row_component'

const HotelRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`

export default (props) => {
  const { list } = props
  return (
    <HotelRowWrapper>
      {
        list.map(hotel => (<HotelRowComponent hotel={hotel} />))
      }
    </HotelRowWrapper>
  )
}
