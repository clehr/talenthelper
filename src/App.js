import React from 'react';
import './App.css';

function App() {
  const backgroundUrl = "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=Monk&spec=Mistweaver&region=2";
  return (
    <div className="app">
      <button>
        <a href={backgroundUrl} target="_blank" rel="noopener noreferrer">
          show me my spec!
        </a>
      </button>
    </div>
  );
}

export default App;
