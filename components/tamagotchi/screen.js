import React from 'react';
import Search from './search';
import MotivationBar from './motivationBar';

const Image = ({ img, burnout }) => {
  if (burnout) {
    return <div className="tamagotchi__img">😵</div>;
  } else {
    return <img className="tamagotchi__img" src={img} />;
  }
};

const Message = ({ name, motivation, burnout }) => {
  if (motivation) {
    return (
      <div className="tamagotchi__motivation">
        {burnout ? (
          `${name} has burnt out!`
        ) : (
          <MotivationBar health={motivation} />
        )}
      </div>
    );
  } else {
    return null;
  }
};

const Screen = ({ name, img, burnout, motivation, updateData }) => {
  return (
    <div className="tamagotchi__screen">
      <Search name={name} updateParentState={updateData} />
      <Image img={img} burnout={burnout} />
      <Message name={name} motivation={motivation} burnout={burnout} />
    </div>
  );
};

export default Screen;
