import React from 'react'

import { Notice } from '../Notice/Notice'

import './Display.css'

export const Display = (props) => {
  return (
    <div className='display'>
      <div className="display__text">
        {props.text}
      </div>
      <div className="display__wrapper">
        <p className="display__value">
          —
        </p>
        {/* <div className="display__notice-wrapper"> */}
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
        {/* </div> */}
        
      </div>
        
    </div>
  )
}
