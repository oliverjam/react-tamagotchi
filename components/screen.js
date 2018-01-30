import React from 'react';
import Search from './search';
import MotivationBar from './motivationBar';

const Screen = ({ name, img, burnout, motivation, updateData }) => {
  return (
    <div className="tamagotchi__screen">
      {name
        ? <div className="tamagotchi__name">{name}</div>
        : <Search updateParentState={updateData} />
      }
      {burnout
        ? <div className="tamagotchi__img">😵</div>
        : <img className="tamagotchi__img" src={img} />
      }
      { // we use '!!' to force motivation to be a boolean here
        // otherwise we get '0' rendered as React will 'toString' it
        !!motivation && (
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
