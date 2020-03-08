import React from 'react';
import './App.css';
import { classNames } from './wowClasses';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: 'Monk', spec: 'Mistweaver' };
  }

  changeClass = (event) => this.setState({ class: event.target.value });

  changeSpec = (event) => this.setState({ spec: event.target.value });

  render() {
    const wowClass = this.state.class;
    const spec = this.state.spec;

    const dungeonUrl = "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=" + wowClass + "&spec=" + spec + "&leaderboards=1&region=2";

    return (
      <div>
        <div>
          <img src="https://vignette.wikia.nocookie.net/wowwiki/images/5/5e/New_WorldOfWarcraft_logo_large.png/revision/latest?cb=20131220175833" alt="logo" />
        </div>
        <div className="black-section">
          <div>
            <p htmlFor="usecase">Choose:</p>
            <select id="usecase">
              <option value="Mythic">Mythic+</option>
              <option value="Raid">Raid</option>
            </select>
          </div>

          <div>
            <p htmlFor="class">Your class:</p>
            <select id="class" onChange={this.changeClass}>
              {
                classNames.map((className) =>
                  <option key={className.name} value={className.name}>{className.name}</option>
                )
              }
            </select>
          </div>

          <div>
            <p htmlFor="spec">Your spec:</p>
            <select id="spec" onChange={this.changeSpec}>
              {classNames.map((className) => className.specs.map((spec) => <option key={spec} value={spec}>{spec}</option>))}
            </select>
          </div>

          <div>

            <a className="Link Button Button--ocho" href={dungeonUrl} target="_blank" rel="noopener noreferrer">
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


