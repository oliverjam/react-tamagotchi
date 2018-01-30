import React from 'react';
import Search from './search';
import MotivationBar from './motivationBar';
import skullIcon from '../assets/skull.svg';

const ErrorView = () => (
  <div className="tamagotchi__screen">
    <div>There’s been a terrible mistake</div>
    <img className="tamagotchi__img" src={skullIcon} alt="A skull and crossbones" />
    <div>Please try again :)</div>
  </div>
)

const Screen = ({ error, name, img, burnout, motivation, updateData }) => {
  if (error) return <ErrorView />
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
