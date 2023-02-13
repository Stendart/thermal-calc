import React from 'react'

import { HumidityZone } from './HumidityZone/HumidityZone'
import { HumidityRoom } from './HumidityRoom/HumidityRoom'
import { WallsCharacteristics } from './WallsCharacteristics/WallsCharacteristics'
import { Brand } from './Brand/Brand'

// ToDo
// Доделать ховеры и фокусы на UI элементах 
//+ в переключении шагов галочку 
//+ ограничить переключение на уровне блокировки кнопок





export const StepDisplay = ({curStep, humidityData}) => {

  const COMPONENT_MAP = {
    0: <HumidityZone humidityData={humidityData}/>,
    1: <HumidityRoom />,
    2: <WallsCharacteristics />,
    3: <Brand />
  }
  
  const getCurrentComponent = (curStep) => {
    const mapLenght = Object.keys(COMPONENT_MAP).length;

    if(curStep >= mapLenght) {
      return COMPONENT_MAP[mapLenght - 1]
    }
    if(curStep < 0) {
      return COMPONENT_MAP[0]
    }
    return COMPONENT_MAP[curStep]
    
  }

  const CurentStepComponent = getCurrentComponent(curStep);

  return (
    <div>
      {/* <CurentStepComponent /> */}
      {CurentStepComponent }
    </div>
  )
}


//rafc