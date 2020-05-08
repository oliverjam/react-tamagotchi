import React from "react";
import skullIcon from "../assets/skull.svg";

const ErrorView = () => (
  <>
    <div>There’s been a terrible mistake</div>
    <img
      className="tamagotchi__img"
      src={skullIcon}
      alt="A skull and crossbones"
    />
    <div>Please try again :)</div>
  </>
);

export default ErrorView;
