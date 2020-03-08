import React from 'react';
import './App.css';
import { classNames } from './wowClasses';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: null, spec: null, urlToOpen: null, mode: null };
  }

  changeUrlToOpen = () => {
    if (this.state.mode === 'MythicPlus') {
      this.setState({ urlToOpen: "https://www.warcraftlogs.com/zone/rankings/20#metric=playerscore&class=" + this.state.class + "&spec=" + this.state.spec + "&leaderboards=1&region=2" })
      return;
    }
    this.setState({ urlToOpen: "https://www.warcraftlogs.com/zone/rankings/24#metric=hps&class=Monk&boss=0&region=2&spec=Mistweaver" });
  }

  changeClass = (event) => {
    this.setState({ class: event.target.value });
    this.changeUrlToOpen();
  }

  changeSpec = (event) => {
    this.setState({ spec: event.target.value });
    this.changeUrlToOpen();
  }

  changeMode = (event) => this.setState({ mode: event.target.value });

  render() {
    return (
      <div>
        <div>
          <img src="https://vignette.wikia.nocookie.net/wowwiki/images/5/5e/New_WorldOfWarcraft_logo_large.png/revision/latest?cb=20131220175833" alt="logo" />
        </div>
        <div className="black-section">
          <div>
            <p htmlFor="usecase">Mode:</p>
            <select id="usecase" onChange={this.changeMode}>
              <option selected disabled>Choose your mode</option>
              <option value="MythicPlus">Mythic+</option>
              <option value="Raid">Raid</option>
            </select>
          </div>

          <div>
            <p htmlFor="class">Your class:</p>
            <select id="class" onChange={this.changeClass}>
              <option selected disabled>Choose your class</option>
              {
                classNames.map((className) =>
                  <option key={className.name} value={className.name}>{className.name}</option>
                )
              }
            </select>
          </div>

          {this.state.class !== null &&
            <div>
              <p htmlFor="spec">Your spec:</p>
              <select id="spec" onChange={this.changeSpec}>
                <option selected disabled>Choose your spec</option>
                {classNames.map((className) =>
                  className.specs
                    .filter(() => className.name === this.state.class)
                    .map((spec) =>
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
              </select>
            </div>
          }

          <div>

            <a className="Link Button Button--ocho" href={this.state.urlToOpen} target="_blank" rel="noopener noreferrer">
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


