import React from 'react';
import { render } from 'react-dom';
import Tamagotchi from './components/tamagotchi';
import './index.css';

const App = () => (
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

render(
  <App />,
  document.getElementById('root') // eslint-disable-line no-undef
);
