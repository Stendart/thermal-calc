import { useState } from 'react';

import { StepsCounter } from './components/StepsCounter/StepsCounter';
import { StepDisplay } from './components/StepDisplay/StepDisplay';
import { Footer } from './components/Footer/Footer';



import './App.css';

function App() {
  const [curStep, setCurStep] = useState(0);

  return (
    <div className="app">
      <main className="app__header">
        <div className="app__steps">
          <StepsCounter curStep={curStep} />
        </div>
        <div className="app__main">
          <StepDisplay curStep={curStep} />
        </div>
        <div className="app__footer">
          <Footer changeStepHandler={setCurStep} curStep={curStep}/>
        </div>
      </main>
    </div>
  );
}

export default App;
