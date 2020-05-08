import React from "react";
import ErrorView from "./error";
import Search from "./search";
import MotivationBar from "./motivationBar";
import skullIcon from "../assets/skull.svg";

const Screen = ({ gameState, startGame, motivation }) => {
  const [fetchState, setFetchState] = React.useState("initial");
  const [data, setData] = React.useState({});

  if (fetchState === "initial")
    return (
      <Search
        setData={setData}
        setFetchState={setFetchState}
        startGame={startGame}
      />
    );
  if (fetchState === "loading") return <div>Loading...</div>;
  if (fetchState === "error") return <ErrorView />;

  if (gameState === "finished")
    return (
      <Profile name={data.name} img={skullIcon} motivation="They burnt out!" />
    );
  return (
    <Profile
      name={data.name}
      img={data.img}
      motivation={<MotivationBar health={motivation} />}
    />
  );
};

function Profile({ name, img, motivation }) {
  return (
    <>
      <div className="tamagotchi__name">{name}</div>
      <img className="tamagotchi__img" src={img} alt="" />
      <div className="tamagotchi__motivation">{motivation}</div>
    </>
  );
}

export default Screen;
