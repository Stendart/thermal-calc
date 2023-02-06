import { StepsCounter } from './components/StepsCounter/StepsCounter';
import { StepDisplay } from './components/StepDisplay/StepDisplay';
import { Footer } from './components/Footer/Footer';



import './App.css';

function App() {

  



  return (
    <div className="app">
      <main className="app__header">
        <div className="app__steps">
          <StepsCounter />
        </div>
        <div className="app__main">
          <StepDisplay />
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
