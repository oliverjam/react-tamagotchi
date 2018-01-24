import React from 'react';

const Controls = ({ burnout, incrementMotivation }) => (
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
);

export default Controls;
