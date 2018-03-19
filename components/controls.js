import React from 'react';
import { Store } from '../store';

const Controls = () => (
  <Store.Consumer>
    {({ state: { burnout }, incrementMotivation }) => (
      <div className="tamagotchi__btn-group">
        <button
          className="tamagotchi__btn"
          onClick={() => incrementMotivation(2)}
          disabled={burnout}
        >
          💜
        </button>
        <button
          className="tamagotchi__btn"
          onClick={() => incrementMotivation(3)}
          disabled={burnout}
        >
          🐶
        </button>
        <button
          className="tamagotchi__btn"
          onClick={() => incrementMotivation(1)}
          disabled={burnout}
        >
          ⭐️
        </button>
      </div>
    )}
  </Store.Consumer>
);

export default Controls;
