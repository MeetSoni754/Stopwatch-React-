import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(null);
  const [Now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (Date.now == 10){
      this.url="https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg";
      this.audio = new Audio(this.url);
      console.log(this.audio);
      this.audio.play();
      
    }
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    },10);
  };

  const handleStop = () => {
    
    clearInterval(intervalRef.current);
  };
  const handleReset = () => {
    setTime(null);
    setNow(null);
    clearInterval(intervalRef.current);
  }

 
  let timepassed = (time - Now) / 1000;
  return (
    
    <div className="App">
      <h1>Stop watch</h1>
      <h1>Stopwatch   {timepassed}</h1>
      <div className="buttons">
        <button className="start" onClick={handleStart}>Start</button>
        <button className="stop" onClick={handleStop}>Stop</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
