import React from 'react'

import { CustomSelect } from '../../UI/CustomSelect/CustomSelect'
import { Display } from '../../Display/Display'
import { Notice } from '../../Notice/Notice'
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
        <Display text={'Зона влажности для вашего населённого пункта'}>
          <Notice>
            <div className="display__notice-wrapper">
              Зона влажности — один из параметров, который учитывается при расчёте утеплителя. 
              Это территория со схожими влажностными характеристиками.
              <div className="display__notice-info">
                Обозначается цифрами от 1 до 3
              </div>
              Чем выше цифра — тем суше зона.  
            </div>
          </Notice>
        </Display>
      </div>
    </div>
  )
}
