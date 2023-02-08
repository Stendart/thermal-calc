import React from 'react'

import { StepBlock } from '../StepBlock/StepBlock'
import './StepsCounter.css'

import { stepData } from '../../mock-data'

export const StepsCounter = ({curStep}) => {

  const prepareData = stepData.map((step, index) => {
    if (index < curStep) {
      return {...step, status: 'compleated'}
    }
    if (index === curStep) {
      return {...step, status: 'current'}
    }
    else {
      return {...step, status: 'idle'}
    }
  })

  console.log('stepData', stepData)

  return (
    <div className='steep-counter'>
      {
        prepareData.map(step => (
          <StepBlock 
            key={step.id} 
            number={step.componentNumber} 
            description={step.title} 
            status={step.status} 
          />)
        )
      }
    </div>
  )
}
