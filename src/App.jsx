import { useState, useEffect } from 'react';

import { StepsCounter } from './components/StepsCounter/StepsCounter';
import { StepDisplay } from './components/StepDisplay/StepDisplay';
import { Footer } from './components/Footer/Footer';

import { useGetParcedCsvData } from './custom-hooks/useGetParcedCsvData';
import { usePrepareData } from './custom-hooks/usePrepareData';
import { stepData } from './mock-data'

import './App.css';

function App() {
  const [curStep, setCurStep] = useState(0);
  const [isFinalStep, setIsFinalStep] = useState(false);

  const humidityZone = useGetParcedCsvData('data/humidity-zone.csv');
  // console.log('humidityZone', humidityZone);

  const humidityData = usePrepareData(humidityZone?.data.slice(1));

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
          <StepDisplay curStep={curStep} humidityData={humidityData} />
        </div>
        <div className="app__footer">
          <Footer changeStepHandler={changeStep} curStep={curStep} isFinalStep={isFinalStep}/>
        </div>
      </main>
    </div>
  );
}

export default App;
