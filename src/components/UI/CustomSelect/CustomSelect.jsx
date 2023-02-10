import React from 'react'
import Select, {components} from 'react-select'

import './CustomSelect.css'



const Control = (props) => {
  return (
    <>
      {
        props.hasValue ? <label className='custom-select__lable'> { props.lable } </label> : null
      }
      
      <components.Control {...props} />
    </>
  );
};

export const CustomSelect = (props) => {

  const getOptionClassList = (state) => {
    let classList = ''

    if (state.isSelected) {
      classList += ' custom-select__selected'
    }
    if (state.isFocused) {
      classList += ' custom-select__hover'
    }

    return classList
  }

  return (
    <Select options={props.options} 
      className='custom-select'
      placeholder={'custom text'}
      components={{
        IndicatorSeparator: () => null,
        Control: (props) => <Control {...props} lable='text' />
      }}
      // styles={colourStyles}
      classNames={{
        control: (state) => 
          state.hasValue ? 'custom-select__control custom-select__control--value' : 'custom-select__control',
        option: (state) => getOptionClassList(state),
        valueContainer: (state) =>
          state.hasValue ? 'custom-select__value' : ''
      }}
    />
  )
}
