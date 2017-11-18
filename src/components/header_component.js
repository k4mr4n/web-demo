import React from 'react'
import styled from 'styled-components'

import { Colors, Images, Metrics } from '../static'

const Header = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  box-shadow: 0 0 4px 0 #c4c4c4;
  font-size: 24px;

  @media (max-width: ${Metrics.mobile}) {
    font-size: 17px;
    height: 60px;
  }
`
const HeaderLogo = styled.img`
  width: 70px;
  height: 70px;

  @media (max-width: ${Metrics.mobile}) {
    height: 60px;
  }
`

const HeaderTitle = styled.p`
  font-weight: bold;
  margin-left: 15px;
  color: ${Colors.primary};
`

export default (props) => (
  <Header>
    <HeaderLogo src={Images.logo} />
    <HeaderTitle>SnapTravel</HeaderTitle>
  </Header>
)
