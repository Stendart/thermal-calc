import React from 'react'

import './CustomRadioBtn.css'

export const CustomRadioBtn = ({children, isSelected=false, onClick, selectId, className}) => {

  // ToDo выношу HumidityTypeBtn в отдельный компонент 
  // что бы можно было использовать и на последнем экране

  const clickHandler = () => {
    onClick(selectId);
  }

  return (
    <button 
      className={'custom-btn ' + (isSelected ? ' custom-btn--selected ' : '') + (className ?? '')} 
      onClick={clickHandler}>
      { children }
    </button>
  )
}
