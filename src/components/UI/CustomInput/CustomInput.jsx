import React, { useState, useRef } from 'react'

import './CustomInput.css'

export const CustomInput = (props) => {

  const [value, setValue] = useState(props.defaultValue ?? '');

  const changeHandler = (e) => {
    const { value } = e.target;
    setValue(value)
  }

  const inputId = useRef(Math.random());

  return (
    <div className='custom-input'>
      {
        value 
        ? <label htmlFor={inputId.current} className='custom-input__label'>Толщина стены, мм</label>
        : null 
      }
      
      <input 
        id={inputId.current}
        type="text" 
        className={'custom-input__input ' + (value ? 'custom-input__input--text' : 'custom-input__input--empty') }
        placeholder={props.placeholder}
        value={value} onChange={changeHandler}/>
    </div>
  )
}
