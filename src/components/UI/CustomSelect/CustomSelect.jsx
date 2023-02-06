import React from 'react'
import Select from 'react-select'



export const CustomSelect = (props) => {
  return (
    <Select options={props.options} 
      components={{
        IndicatorSeparator: () => null
      }}
    />
  )
}
