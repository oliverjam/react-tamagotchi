import React from 'react';
import heartIcon from './assets/heart.svg';

const MotivationBar = ({ health }) => {
  // const total = Math.round(health / 20);
  const hearts = Array.from({ length: health }, (item, i) => (
    <img src={heartIcon} className="tamagotchi__heart" key={i} />
  ));
  return (
    <div style={{ display: 'flex' }}>
      <span>Motivation:</span>
      <span className="tamagotchi__hearts">{hearts}</span>
    </div>
  );
};

export default MotivationBar;
