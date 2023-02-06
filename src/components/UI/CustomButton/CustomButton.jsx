import React from 'react'
import './CustomButton.css'

export const BTN_TYPE_MAP = {
  continue: 'continue',
  back: 'back', 
  refresh: 'refresh'
}

export const CustomButton = (props) => {
  const { type, text, isDisabled=false } = props;

  return (
    <button disabled={isDisabled} className={'button ' + (type ? 'button__' + type : '')}>{ text }</button>
  )
}