import React from 'react'

import notice from './notice.svg'
import './Notice.css'

export const Notice = (props) => {
  return (
    <div className='notice'>
      <div className="notice__content">
        { props.children }
      </div>
      <img className="notice__img" src={notice} alt=''/>
    </div>
  )
}
