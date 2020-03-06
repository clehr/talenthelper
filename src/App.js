import React from 'react';
import './App.css';

function App() {
  const spec = 'Mistweaver';
  const wowClass = 'Monk';
  const dungeonUrl = "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=" + wowClass + "&spec=" + spec + "&region=2";
  return (
    <div className="app">

      <button>
        <a href={dungeonUrl} target="_blank" rel="noopener noreferrer">
          show me my spec!
        </a>
      </button>

    </div>
  );
}

export default App;
