import React from 'react'

import notice from './notice.svg'
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
        <img className="display__notice" src={notice} alt=''/>
      </div>
        
    </div>
  )
}
