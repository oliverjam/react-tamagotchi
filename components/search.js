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
    getUser(this.state.username).then(data => {
      const { name, login, avatar_url: img, followers } = data;
      this.props.updateParentState({
        name,
        login,
        img,
        followers,
        fetched: true,
      });
    });
    this.setState({ username: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
          style={{ marginLeft: '1em' }}
        />
      </form>
    );
  }
}

export default Search;
