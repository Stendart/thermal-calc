import React from 'react'

import { Notice } from '../Notice/Notice'

import './Display.css'

export const Display = (props) => {
  return (
    <div className={'display ' + (props.className ?? '')}>
      <div className="display__text">
        {props.text}
      </div>
      <div className="display__wrapper">
        <p className="display__value">
          —
        </p>
          {/* for notice block */}
          { props.children }
      </div>
        
    </div>
  )
}
