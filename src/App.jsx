import { useState, useEffect } from 'react';

import { StepsCounter } from './components/StepsCounter/StepsCounter';
import { StepDisplay } from './components/StepDisplay/StepDisplay';
import { Footer } from './components/Footer/Footer';

import { useGetParcedCsvData } from './custom-hooks/useGetParcedCsvData';
import { stepData } from './mock-data'

import './App.css';

const usePrepareDate = (dateArrays) => {

  /*
  Преобразование двумерного массива, полученного из csv в массив объектов по типу
  {
    district1: {
      region1 : [locality, locality, ...],
      region2 : [locality, locality, ...],
    },
    district2: {
      region1 : [locality, locality, ...],
      region2 : [locality, locality, ...],
    },
  }
  */

  // дальневосточный - 54
  // приволжский - 192
  // Северо-западный - 136
  console.log('dateArrays', dateArrays);
  const allDistricts = dateArrays?.map(array => array[0]);
  const districtList = new Set(allDistricts);

  const parcedObject = {}

  // districtList.forEach(district => {

    dateArrays?.forEach(array => {


      // if (array[0] === district) {
      //   if (!parcedObject[array[0]]) {
      //     parcedObject[array[0]] = {
      //       [array[1]]: []
      //     }
      //   } else {
      //     parcedObject[array[0]] = { 
      //       ...parcedObject[array[0]],
      //       [array[1]]: []
      //     }
      //   }
      // }

      
      
      // if(parcedObject[array[0]]) {
      //   if(parcedObject[array[0]][array[1]]) {
      //     parcedObject[array[0]][array[1]] = [...parcedObject[array[0]][array[1]], array[2]]
      //   } else {
      //     parcedObject[array[0]] = {...parcedObject[array[0]], [array[1]]:[]}
      //   }
      // } else {
      //   parcedObject[array[0]] = {}
      // }

      if(parcedObject[array[0]]) {
        if(parcedObject[array[0]][array[1]]) {
          parcedObject[array[0]][array[1]] = [...parcedObject[array[0]][array[1]], array[2]]
        } else {
          parcedObject[array[0]] = {...parcedObject[array[0]], [array[1]]: [array[2]]}
        }
      } else {
        parcedObject[array[0]] = {[array[1]]: [array[2]]}
      }


    })



    

  // });
  console.log('parcedObject', parcedObject);
}

function App() {
  const [curStep, setCurStep] = useState(0);
  const [isFinalStep, setIsFinalStep] = useState(false);

  const humidityZone = useGetParcedCsvData('data/humidity-zone.csv');
  console.log('humidityZone', humidityZone);

  usePrepareDate(humidityZone?.data.slice(1))

  const changeStep = (direction) => {
    setCurStep(prevStep => prevStep + direction);
  }

  useEffect(()=> {
    if(curStep >= stepData.length -1) {
      setIsFinalStep(true);
    } else {
      setIsFinalStep(false);
    }
  }, [curStep, stepData])

  return (
    <div className="app">
      <main className="app__header">
        <div className="app__steps">
          <StepsCounter curStep={curStep} stepData={stepData} />
        </div>
        <div className="app__main">
          <StepDisplay curStep={curStep} />
        </div>
        <div className="app__footer">
          <Footer changeStepHandler={changeStep} curStep={curStep} isFinalStep={isFinalStep}/>
        </div>
      </main>
    </div>
  );
}

export default App;
