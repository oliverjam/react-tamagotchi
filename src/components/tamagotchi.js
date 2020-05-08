import React from "react";
import Screen from "./screen";
import Controls from "./controls";
import "./tamagotchi.style.css";

const DEC_INTERVAL = 6000;

function Tamagotchi() {
  const [data, setData] = React.useState({});
  const [fetched, setFetched] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [running, setRunning] = React.useState(false);
  const [motivation, setMotivation] = React.useState(5);
  const [burnout, setBurnout] = React.useState(false);

  const interval = React.useRef(null);

  const updateData = (data) => {
    if (data.error) {
      return setError(true);
    }
    setData(data);
    setFetched(true);
  };
  const startTimer = () => {
    setMotivation(5);
    // start a timer to reduce motivation by 1 every 5s
    interval.current = setInterval(() => {
      setMotivation((prevMotivation) => prevMotivation - 1);
    }, DEC_INTERVAL);
  };
  // passed to child so <Controls /> can update the state here
  const incrementMotivation = (inc) => {
    if (motivation + inc > 5) {
      return setMotivation(5);
    }
    setMotivation((prevMotivation) => prevMotivation + inc);
  };
  const reset = () => {
    setBurnout(true);
    setRunning(false);
    setMotivation(5);
    clearInterval(interval.current);
  };
  React.useEffect(() => {
    if (motivation < 1) {
      reset();
    }
  }, [motivation]);
  React.useEffect(() => {
    // if the game is 'over' then don't start a timer
    if (burnout) return;
    // if we have data and aren't currently running then start
    if (fetched && !running) {
      setRunning(true);
      startTimer();
    }
  }, [burnout, fetched, running]);
  const { name, img } = data;
  return (
    <div className="tamagotchi">
      <Screen
        error={error}
        name={name}
        img={img}
        burnout={burnout}
        motivation={motivation}
        updateData={updateData}
      />
      <Controls burnout={burnout} incrementMotivation={incrementMotivation} />
    </div>
  );
}

export default Tamagotchi;
