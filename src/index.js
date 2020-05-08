import React from "react";
import { render } from "react-dom";
import Tamagotchi from "./components/tamagotchi";
import "./index.css";

const App = () => (
  <div className="container">
    <h1>Github Tamagotchi</h1>
    <Tamagotchi />
  </div>
);

render(
  <App />,
  document.getElementById("root") // eslint-disable-line no-undef
);
