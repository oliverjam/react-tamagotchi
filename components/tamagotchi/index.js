import React from 'react';
import './style.css';

const Tamagotchi = ({
  img,
  name,
  motivation,
  burnout,
  incrementMotivation,
}) => (
  <div className="tamagotchi">
    <div className="tamagotchi__screen">
      {burnout ? (
        <div className="tamagotchi__img">😵</div>
      ) : (
        <img className="tamagotchi__img" src={img} />
      )}
      <div className="tamagotchi__name">{name || 'Please choose a user'}</div>
      {motivation ? (
        <div className="tamagotchi__motivation">
          {burnout ? `${name} has burnt out!` : `Motivation: ${motivation}%`}
        </div>
      ) : null}
    </div>
    <div className="tamagotchi__btn-group">
      <button
        className="tamagotchi__btn"
        onClick={incrementMotivation}
        disabled={burnout}
      >
        💜
      </button>
      <button
        className="tamagotchi__btn"
        onClick={incrementMotivation}
        disabled={burnout}
      >
        🐶
      </button>
      <button
        className="tamagotchi__btn"
        onClick={incrementMotivation}
        disabled={burnout}
      >
        ⭐️
      </button>
    </div>
  </div>
);

export default Tamagotchi;
