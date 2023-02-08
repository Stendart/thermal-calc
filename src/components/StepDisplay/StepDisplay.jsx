import React from 'react'

import { HumidityZone } from './HumidityZone/HumidityZone'

export const StepDisplay = () => {

  // Компоненты для каждого шага
  // или передавать пропсами
  // const curentStepComponent = '<div className="app__steps"></div>'; 
  
  const getCurrentComponent = () => {
    return HumidityZone
  }

  const CurentStepComponent = getCurrentComponent();

  return (
    <div>
      <CurentStepComponent />
    </div>
  )
}


//rafc