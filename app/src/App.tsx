import React from 'react'
import './css/App.css'

import Schedule from './components/Schedule'
import Bar from './components/Bar'

function App() {
  return (
    <div className="App">
        <Bar />
        <header className="App-header">
            <Schedule />
        </header>
    </div>
  );
}

export default App;
