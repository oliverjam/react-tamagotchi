import React from "react";

const Controls = ({ active, addMotivation }) => (
  <div className="tamagotchi__btn-group">
    <button
      className="tamagotchi__btn"
      onClick={() => addMotivation(2)}
      disabled={!active}
    >
      <span role="img" aria-label="Like a tweet">
        💜
      </span>
    </button>
    <button
      className="tamagotchi__btn"
      onClick={() => addMotivation(3)}
      disabled={!active}
    >
      <span role="img" aria-label="Send a puppy pic">
        🐶
      </span>
    </button>
    <button
      className="tamagotchi__btn"
      onClick={() => addMotivation(1)}
      disabled={!active}
    >
      <span role="img" aria-label="Star a GitHub repo">
        ⭐️
      </span>
    </button>
  </div>
);

export default Controls;
