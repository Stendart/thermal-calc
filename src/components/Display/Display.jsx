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
        <div className="display__notice-wrapper">
          {/* <div className="display__notice">
            <Notice />
          </div>
          <img className="display__notice-img" src={notice} alt=''/> */}
          <Notice />
        </div>
        
      </div>
        
    </div>
  )
}
