import React from 'react'

import { HumidityZone } from './HumidityZone/HumidityZone'
import { HumidityRoom } from './HumidityRoom/HumidityRoom'

const COMPONENT_MAP = new Map([
  [0, HumidityZone],
  [1, HumidityRoom]
])

export const StepDisplay = ({curStep}) => {
  
  const getCurrentComponent = (curStep) => {

    console.log('COMPONENT_MAP', COMPONENT_MAP)
    return COMPONENT_MAP.get(curStep)
  }

  const CurentStepComponent = getCurrentComponent(curStep);

  return (
    <div>
      <CurentStepComponent />
    </div>
  )
}


//rafc