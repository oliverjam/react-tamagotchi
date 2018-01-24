import React from 'react';
import TamagotchiView from './view';

const DEC_INTERVAL = 5000;

class Tamagotchi extends React.Component {
  state = {
    data: {},
    fetched: false,
    running: false,
    motivation: 0,
    burnout: false,
  };
  updateData = data => {
    this.setState({ data, fetched: true });
  };
  startTimer = () => {
    this.setState({ motivation: 5 });
    this.interval = setInterval(() => {
      this.setState(
        prevState => {
          return { motivation: prevState.motivation - 1 };
        },
        () => {
          if (this.state.motivation < 1) {
            this.setState({ burnout: true, running: false, motivation: 5 });
            clearInterval(this.interval);
          }
        }
      );
    }, DEC_INTERVAL);
  };
  incrementMotivation = inc => {
    if (this.state.motivation + inc > 5) {
      return this.setState({ motivation: 5 });
    }
    this.setState(prevState => {
      return { motivation: prevState.motivation + inc };
    });
  };
  componentDidUpdate() {
    if (this.state.burnout) return;
    if (this.state.fetched && !this.state.running) {
      this.setState({ running: true });
      this.startTimer();
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { data: { name, img }, motivation, burnout } = this.state;
    return (
      <div>
        <TamagotchiView
          name={name}
          motivation={motivation}
          img={img}
          incrementMotivation={this.incrementMotivation}
          burnout={burnout}
          updateData={this.updateData}
        />
        <h2>Key:</h2>
        <ul>
          <li>💜: Compliment their code</li>
          <li>🐶: Send them a cute gif</li>
          <li>⭐️: Star their side-project</li>
        </ul>
      </div>
    );
  }
}

export default Tamagotchi;
