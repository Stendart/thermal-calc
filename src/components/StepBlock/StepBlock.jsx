import React from 'react'

import './StepBlock.css'

export const StepBlock = (props) => {

  const { number, description, status } = props  // status = idle, current, compleated

  return (
    <div className='step-block'>
      {/* <div className={"step-block__number " + (status === 'compleated' ? 'step-block__number--compleated' : '')}> { number } </div> */}
      <div className={"step-block__number " + 'step-block__number--' + status}> { number } </div>
      <div className="step-block__description"> { description } </div>
    </div>
  )
}
