import React from "react";
import Screen from "./screen";
import Controls from "./controls";
import "./tamagotchi.style.css";

const DEC_INTERVAL = 1000;

function Tamagotchi() {
  const [motivation, setMotivation] = React.useState(5);
  const [gameState, setGameState] = React.useState("initial"); // "initial" | "running" | "finished"

  const startGame = () => {
    setGameState("running");
    setMotivation(5);

    const interval = setInterval(() => {
      // this interval is only create once
      // that means the motivation state value won't ever change
      // we have to use the function form of state update
      // so we have access to the up-to-date motivtion
      setMotivation((prevMotivation) => {
        if (prevMotivation < 1) {
          setGameState("finished");
          clearInterval(interval);
          return 5;
        } else {
          return prevMotivation - 1;
        }
      });
    }, DEC_INTERVAL);
  };

  const addMotivation = (inc) => {
    //Math.min means it'll never be over 5
    setMotivation((prevMotivation) => Math.min(prevMotivation + inc, 5));
  };

  return (
    <div className="tamagotchi">
      <div className="tamagotchi__screen">
        <Screen
          gameState={gameState}
          motivation={motivation}
          startGame={startGame}
        />
      </div>
      <Controls
        active={gameState === "running"}
        addMotivation={addMotivation}
      />
    </div>
  );
}

export default Tamagotchi;
