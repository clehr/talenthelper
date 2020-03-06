import React from 'react';
import './App.css';

function App() {
  const spec = 'Mistweaver';
  const wowClass = 'Monk';
  const dungeonUrl = "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=" + wowClass + "&spec=" + spec + "&region=2";
  return (
    <div className="app">

      <label for="class">Your class:</label>
      <select id="class">
        <option value="Monk">Monk</option>
        <option value="Warlock">Warlock</option>
        <option value="Warrior">Warrior</option>
        <option value="Mage">Mage</option>
      </select>

      <label for="spec">Your spec:</label>
      <select id="spec">
        <option value="Mistweaver">Mistweaver</option>
        <option value="Brewmaster">Brewmaster</option>
        <option value="Windwalker">Windwalker</option>
      </select>

      <button>
        <a href={dungeonUrl} target="_blank" rel="noopener noreferrer">
          show me my spec!
        </a>
      </button>

    </div>
  );
}

export default App;
