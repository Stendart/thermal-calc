import React from 'react'

import './HumidityTypeBtn.css'

export const HumidityTypeBtn = ({children, isSelected=false}) => {
  return (
    <button className={'humidity-btn' + (isSelected ? ' humidity-btn--selected' : '')}>
      { children }
    </button>
  )
}
