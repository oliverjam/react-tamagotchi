import React from 'react';
import getUser from '../utils/getUser';

class Search extends React.Component {
  state = {
    username: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ username: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    getUser(this.state.username)
      .then(res => {
        const { name, login, avatar_url: img } = res;
        const data = { name, login, img };
        this.props.updateParentState(data);
      })
      .catch(err => {
        this.props.updateParentState({ error: true, message: err });
      });
    this.setState({ username: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Please choose a user</label>
        <input
          id="username"
          className="tamagotchi__input"
          value={this.state.username}
          onChange={this.handleChange}
          autoFocus
          autoComplete="false"
        />
      </form>
    );
  }
}

export default Search;
