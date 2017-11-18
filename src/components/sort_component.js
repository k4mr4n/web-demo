import React, { Component } from 'react'
import styled from 'styled-components'

import SortConstants from '../constants/sort_constants'

import SortIcon from 'material-ui-icons/Sort'

const SortButton = styled.a`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${props => props.disabled ? '#f0f0f0' : '#ffffff'};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`

const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`

export default class SortComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sortBy: props.SortObj[0].key,
      sortType: SortConstants.ASC
    }
  }

  _onChange (key) {
    const { sortType } = this.state
    const { onChange } = this.props
    const { ASC, DESC } = SortConstants
    const newSortType = sortType === ASC ? DESC : ASC

    this.setState({
      sortBy: key,
      sortType: newSortType
    }, () => {
      onChange(key, newSortType)
    })
  }

  render () {
    const { sortBy } = this.state
    const { SortObj } = this.props
    return (
      <SortWrapper>
        {
        SortObj.map(({ label, key }) => {
          let arrow = key !== sortBy ? null : (<SortIcon />)
          let disabled = key !== sortBy
          return (
            <SortButton
              disabled={disabled}
              key={key}
              onClick={() => { this._onChange(key) }}>
              {label}{arrow}
            </SortButton>
          )
        })
      }
      </SortWrapper>
    )
  }
}
