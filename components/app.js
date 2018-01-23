import React from 'react';
import Search from './search';
import Followers from './followers';

class App extends React.Component {
  state = {
    name: '',
    username: '',
    img: '',
    followers: 0,
    fetched: false,
    burnout: false,
  };
  updateData = ({ name, username, img, followers, fetched }) => {
    this.setState({ name, username, img, followers, fetched });
  };
  toggleBurnout = () => {
    this.setState(prevState => {
      return { burnout: !prevState.burnout };
    });
  };
  render() {
    const { name, username, img, followers, burnout } = this.state;
    if (burnout) {
      return (
        <div>
          <span>{name} has burnt out and quit coding, oh no! 💔</span>
        </div>
      );
    }
    return (
      <div style={{ padding: '10vw' }}>
        <Search updateParentState={this.updateData} />
        {this.state.fetched && (
          <div>
            <span>{name || username}</span>
            <img
              src={img}
              alt={`${name}'s profile pic`}
              style={{ maxWidth: '100%' }}
            />
            <Followers
              initialFollowers={followers}
              toggleBurnout={this.toggleBurnout}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
