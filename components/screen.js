import React from 'react';
import Search from './search';
import MotivationBar from './motivationBar';

const Screen = ({ name, img, burnout, motivation, updateData }) => {
  return (
    <div className="tamagotchi__screen">
      <Search name={name} updateParentState={updateData} />
      {burnout
        ? <div className="tamagotchi__img">😵</div>
        : <img className="tamagotchi__img" src={img} />
      }
      { // have to use a boolean here otherwise we get '0' rendered
        Boolean(motivation) && (
        <div className="tamagotchi__motivation">
          {burnout
            ? `${name} has burnt out!`
            : <MotivationBar health={motivation} />
          }
        </div>
      )}
    </div>
  );
};

export default Screen;
