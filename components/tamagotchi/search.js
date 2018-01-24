import React from 'react';
import getUser from '../../utils/getUser';

class Search extends React.Component {
  state = {
    username: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ username: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    getUser(this.state.username).then(res => {
      const { name, login, avatar_url: img } = res;
      const data = { name, login, img };
      this.props.updateParentState(data);
    });
    this.setState({ username: '' });
  };
  render() {
    if (this.props.name) {
      return <div className="tamagotchi__name">{this.props.name}</div>;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Please choose a user</label>
          <input
            id="username"
            className="tamagotchi__input"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
      );
    }
  }
}

export default Search;
