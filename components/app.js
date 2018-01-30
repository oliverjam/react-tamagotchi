import React from 'react';
import Tamagotchi from './tamagotchi';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Github Tamagotchi 🐙</h1>
        <Tamagotchi />
        <section>
          <h2>Key:</h2>
          <ul style={{ marginTop: '0.5em' }}>
            <li>💜: Compliment their code</li>
            <li>🐶: Send them a cute gif</li>
            <li>⭐️: Star their side-project</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
