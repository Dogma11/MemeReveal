import MemeView from './MemeView.js';
import React from 'react';
import './App.css';

function App() {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = days[new Date().getDay()];
  return (
    <div className="App">
      <MemeView day={dayName} />
    </div>
  );
}

export default App;
