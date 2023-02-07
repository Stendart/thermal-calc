import React from 'react'

import { CustomSelect } from '../../UI/CustomSelect/CustomSelect'
import { Display } from '../../Display/Display'
import './HumidityZone.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export const HumidityZone = () => {
  return (
    <div className='humidiate-zone'>
      <div className="humidiate-zone__select-wrapper">
        <div className="humidiate-zone__select">
          <CustomSelect options={options} />
        </div>
        <div className="humidiate-zone__select">
          <CustomSelect options={options} />
        </div>
        <div className="humidiate-zone__select">
          <CustomSelect />
        </div>
      </div>
      <div className="humidiate-zone__display">
        <Display text={'Зона влажности для вашего населённого пункта'}/>
      </div>
    </div>
  )
}
