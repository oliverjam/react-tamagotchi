import React from "react";
import getUser from "../utils/getUser";

function Search(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(e.target.username.value).then((res) => {
      const { name, login, avatar_url: img } = res;
      props.updateParentState({ name, login, img });
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
