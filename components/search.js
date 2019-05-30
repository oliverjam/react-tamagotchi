import React from "react";
import getUser from "../utils/getUser";

function Search(props) {
  const [username, setUsername] = React.useState("");

  const handleChange = e => setUsername(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    getUser(username).then(res => {
      const { name, login, avatar_url: img } = res;
      const data = { name, login, img };
      props.updateParentState(data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Please choose a user</label>
      <input
        id="username"
        className="tamagotchi__input"
        value={username}
        onChange={handleChange}
        autoFocus
        autoComplete="false"
      />
    </form>
  );
}

export default Search;
