import React from "react";
import Search from "./search";
import MotivationBar from "./motivationBar";
import skullIcon from "../assets/skull.svg";

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

const Screen = ({ error, name, img, burnout, motivation, updateData }) => {
  // render a different view if there's a fetch error
  if (error) return <ErrorView />;
  return (
    <div className="tamagotchi__screen">
      {name ? (
        <div className="tamagotchi__name">{name}</div>
      ) : (
        <Search updateParentState={updateData} />
      )}
      {burnout ? (
        <span
          className="tamagotchi__img"
          role="img"
          aria-label="They've burnt out!"
        >
          😵
        </span>
      ) : (
        <img className="tamagotchi__img" src={img} alt="Their GitHub profile" />
      )}
      {
        // we use '!!' to force motivation to be a boolean here
        // otherwise we get '0' rendered as React will 'toString' it
        !!motivation && (
          <div className="tamagotchi__motivation">
            {burnout ? (
              `${name} has burnt out!`
            ) : (
              <MotivationBar health={motivation} />
            )}
          </div>
        )
      }
    </div>
  );
};

export default Screen;
