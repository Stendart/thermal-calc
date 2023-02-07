import React from 'react'
import Select, {components} from 'react-select'

import './CustomSelect.css'



const Control = (props) => {
  console.log('props', props)
  return (
    <>
      {/* <Label isFloating={props.isFocused || props.hasValue}>Select</Label> */}
      <label className='custom-select__lable'> Select </label>
      <components.Control {...props} />
    </>
  );
};

// const Label = (props) => {
  
//   return (
//     <label className='custom-select__lable'> { props.children } </label>
//   )
// }



export const CustomSelect = (props) => {

  // делаю что бы селект текст был ниже
  // добавить текст на плейсхолдер

  return (
    <Select options={props.options} 
      className='custom-select'
      components={{
        IndicatorSeparator: () => null,
        Control
      }}
      // styles={colourStyles}
      classNames={{
        control: (state) => 'custom-select__control',
        option: (state) =>
          state.isSelected ? 'custom-select__selected' : '',
      }}
    />
  )
}
