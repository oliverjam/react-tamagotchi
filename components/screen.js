import React from 'react';
import { Store } from '../store';
import Search from './search';
import MotivationBar from './motivationBar';
import skullIcon from '../assets/skull.svg';

const ErrorView = () => (
  <div className="tamagotchi__screen">
    <div>There’s been a terrible mistake</div>
    <img
      className="tamagotchi__img"
      src={skullIcon}
      alt="A skull and crossbones"
    />
    <div>Please try again :)</div>
  </div>
);

const Screen = () => (
  <Store.Consumer>
    {({
      state: { data: { name, login, img }, burnout, motivation, error },
      updateData,
    }) => {
      const user = name || login;
      // render a different view if there's a fetch error
      if (error) return <ErrorView />;
      return (
        <div className="tamagotchi__screen">
          {user ? (
            <div className="tamagotchi__name">{user}</div>
          ) : (
            <Search updateParentState={updateData} />
          )}
          {burnout ? (
            <div className="tamagotchi__img">😵</div>
          ) : (
            <img className="tamagotchi__img" src={img} />
          )}
          {// we use '!!' to force motivation to be a boolean here
          // otherwise we get '0' rendered as React will 'toString' it
          !!motivation && (
            <div className="tamagotchi__motivation">
              {burnout ? (
                `${name} has burnt out!`
              ) : (
                <MotivationBar health={motivation} />
              )}
            </div>
          )}
        </div>
      );
    }}
  </Store.Consumer>
);

export default Screen;
