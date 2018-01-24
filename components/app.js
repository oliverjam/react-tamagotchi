import React from 'react';
import Tamagotchi from './tamagotchi';

class App extends React.Component {
  state = {
    name: '',
    login: '',
    img: '',
    followers: 0,
    fetched: false,
  };
  updateData = ({ name, login, img, followers, fetched }) => {
    this.setState({ name, login, img, followers, fetched });
  };
  render() {
    const { name, login, img, fetched } = this.state;
    return (
      <div className="container">
        <h1>Github Tamagotchi 🐙</h1>
        <Tamagotchi name={name || login} img={img} start={fetched} />
        <section>
          <h2>Key:</h2>
          <ul style={{ marginTop: '0.5em' }}>
            <li>💜: Compliment their code</li>
            <li>🐶: Send them a cute gif</li>
            <li>⭐️: Star their side-project</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
