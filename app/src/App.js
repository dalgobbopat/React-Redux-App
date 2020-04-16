import React from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './components/Activity'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Quarentine Boredom</h1>
      </div>
        <Activity/>
    </div>
  );
}

export default App;
