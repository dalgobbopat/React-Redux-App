import React from 'react';
import logo from './logo.svg';
import './App.css';
import Activity from './components/Activity'

function App() {
  return (
    
    <div className="App">
      <nav>
      <h1>Quarantine Boredom</h1>
      </nav>
      
      <div className='header'>
       
      </div>
      <div className='body'>
      <Activity/>
      </div>
        
    </div>
  );
}

export default App;
