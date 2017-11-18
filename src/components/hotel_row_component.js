import React from 'react'
import styled from 'styled-components'

const HotelRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.18);
`

export default (props) => {
  const { hotel } = props
  return (
    <HotelRow key={hotel.id}>
      <span>{hotel.id}</span>
      <span>{hotel.price}</span>
      <span>{hotel._retailDetails.price}</span>
      <span>{hotel.num_reviews}</span>
    </HotelRow>
  )
}
