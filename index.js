import React from 'react';
import { render } from 'react-dom';
import { Provider } from './store';

import Screen from './components/screen';
import Controls from './components/controls';
import './index.css';

const App = () => (
  <Provider>
    <div className="container">
      <h1>Github Tamagotchi 🐙</h1>
      <div className="tamagotchi">
        <Screen />
        <Controls />
      </div>
      <section>
        <h2>Key:</h2>
        <ul style={{ marginTop: '0.5em' }}>
          <li>💜: Compliment their code</li>
          <li>🐶: Send them a cute gif</li>
          <li>⭐️: Star their side-project</li>
        </ul>
      </section>
    </div>
  </Provider>
);

render(
  <App />,
  document.getElementById('root') // eslint-disable-line no-undef
);
