import React from 'react';
import './App.css';

function App() {
  const spec = 'Mistweaver';
  const wowClass = 'Monk';
  const dungeonUrl = "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=" + wowClass + "&spec=" + spec + "&region=2";
  return (
    <div className="app">

      <img className="logo" src="https://vignette.wikia.nocookie.net/wowwiki/images/5/5e/New_WorldOfWarcraft_logo_large.png/revision/latest?cb=20131220175833" />

      <h3>Hey there!</h3>

      <label for="usecase">What do you want to do?:</label>
      <select id="usecase">
        <option value="Mythic">Mythic</option>
        <option value="Raid">Raid</option>
        <option value="PvP">Warrior</option>
      </select>

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
          Tell me how to skill!
        </a>
      </button>

    </div>
  );
}

export default App;
