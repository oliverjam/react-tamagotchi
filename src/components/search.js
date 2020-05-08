import React from "react";
import getUser from "../utils/getUser";

function Search({ setData, setFetchState, startGame }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchState("loading");
    getUser(e.target.username.value)
      .then((res) => {
        const { name, login, avatar_url: img } = res;
        setFetchState("success");
        setData({ name, login, img });
        startGame();
      })
      .catch((error) => {
        console.error(error);
        setFetchState("error");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Please choose a user</label>
      <input
        id="username"
        className="tamagotchi__input"
        autoFocus
        autoComplete="false"
        name="username"
      />
    </form>
  );
}

export default Search;
