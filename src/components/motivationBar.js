import React from "react";
import heartIcon from "../assets/heart.svg";

const MotivationBar = ({ health }) => {
  const hearts = Array.from({ length: health }, (item, i) => (
    <img src={heartIcon} className="tamagotchi__heart" key={i} alt="heart" />
  ));
  return (
    <div style={{ display: "flex" }}>
      <span>Motivation:</span>
      <span className="tamagotchi__hearts">{hearts}</span>
    </div>
  );
};

export default MotivationBar;
