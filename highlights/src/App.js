import './App.css';
import  PremierLeague  from './components/PremierLeague';
import LaLiga from './components/LaLiga';
import SerieA from './components/SerieA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LATEST HIGHLIGHTS</h1>  
        <PremierLeague />
        <LaLiga />
        <SerieA />
      </header>
    </div>
  );
}

export default App;
