import React from 'react'

import './HumidityTypeBtn.css'

export const HumidityTypeBtn = ({children, isSelected=false, onClick, humidityTypeId}) => {

  const clickHandler = () => {
    onClick(humidityTypeId);
  }

  return (
    <button 
      className={'humidity-btn' + (isSelected ? ' humidity-btn--selected' : '')} 
      onClick={clickHandler}>
      { children }
    </button>
  )
}
