import React from 'react';
import './tamagotchi.style.css';

import Screen from './screen';
import Controls from './controls';

const TamagotchiView = ({
  error,
  name,
  img,
  burnout,
  motivation,
  updateData,
  incrementMotivation,
}) => (
  <div className="tamagotchi">
    <Screen
      error={error}
      name={name}
      img={img}
      burnout={burnout}
      motivation={motivation}
      updateData={updateData}
    />
    <Controls burnout={burnout} incrementMotivation={incrementMotivation} />
  </div>
);

export default TamagotchiView;
