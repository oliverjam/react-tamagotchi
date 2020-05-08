import React from "react";
import { render } from "react-dom";
import Tamagotchi from "./components/tamagotchi";
import "./index.css";

render(
  <Tamagotchi />,
  document.getElementById("root") // eslint-disable-line no-undef
);
