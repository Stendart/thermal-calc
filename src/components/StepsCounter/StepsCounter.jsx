import React from 'react'

import { StepBlock } from '../StepBlock/StepBlock'
import './StepsCounter.css'

import { stepData } from '../../mock-data'

export const StepsCounter = () => {

  console.log('stepData', stepData)

  return (
    <div className='steep-counter'>
      {
        stepData.map(step => <StepBlock 
                                key={step.id} 
                                number={step.componentNumber} 
                                description={step.title} 
                                status={step.status} />)
      }
    </div>
  )
}
