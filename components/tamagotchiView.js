import React from 'react';
import './style.css';

import Screen from './screen';
import Controls from './controls';

const TamagotchiView = ({
  img,
  name,
  motivation,
  burnout,
  incrementMotivation,
  updateData,
}) => (
  <div className="tamagotchi">
    <Screen
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
