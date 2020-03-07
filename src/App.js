import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: 'Warrior', spec: 'Fury' };
  }

  changeClass = (event) => this.setState({ class: event.target.value });

  changeSpec = (event) => this.setState({ spec: event.target.value });

  render() {
    const wowClass = this.state.class;
    const spec = this.state.spec;

    const dungeonUrl = "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=" + wowClass + "&spec=" + spec + "&region=2";

    return (
      <div>
        <div>
          <img src="https://vignette.wikia.nocookie.net/wowwiki/images/5/5e/New_WorldOfWarcraft_logo_large.png/revision/latest?cb=20131220175833" alt="logo" />
        </div>
        <div className="black-section">
          <div>
            <p htmlFor="usecase">Choose:</p>
            <select id="usecase">
              <option value="Mythic">Mythic</option>
              <option value="Raid">Raid</option>
              <option value="PvP">Warrior</option>
            </select>
          </div>

          <div>
            <p htmlFor="class">Your class:</p>
            <select id="class" onChange={this.changeClass}>
              <option value="Monk">Monk</option>
              <option value="Warlock">Warlock</option>
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
            </select>
          </div>

          <div>
            <p htmlFor="spec">Your spec:</p>
            <select id="spec" onChange={this.changeSpec}>
              <option value="Mistweaver">Mistweaver</option>
              <option value="Brewmaster">Brewmaster</option>
              <option value="Windwalker">Windwalker</option>
            </select>
          </div>

          <div>

            <a className="Link Button Button--ocho" href={dungeonUrl}>
              <div className="Button-outer">
                <div className="Button-inner">
                  <div className="Button-label">
                    Show talents
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    );
  }
}


