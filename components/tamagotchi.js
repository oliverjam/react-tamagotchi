import React from 'react';
import TamagotchiView from './tamagotchiView';

const DEC_INTERVAL = 6000;

class Tamagotchi extends React.Component {
  state = {
    data: {},
    fetched: false,
    running: false,
    motivation: 0,
    burnout: false,
  };
  // passed to child as a prop so it can update the state here
  // see https://reactjs.org/docs/lifting-state-up.html
  updateData = data => {
    if (data.error) {
      return this.setState({ error: true });
    }
    this.setState({ data, fetched: true });
  };
  startTimer = () => {
    this.setState({ motivation: 5 });
    // start a timer to reduce motivation by 1 every 5s
    this.interval = setInterval(() => {
      this.setState(
        prevState => {
          return { motivation: prevState.motivation - 1 };
        },
        // after our state update check if we're out of motivation
        // if so we end the game and stop the timer
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
    // ensure we don't go higher than 5
    if (this.state.motivation + inc > 5) {
      return this.setState({ motivation: 5 });
    }
    this.setState(prevState => {
      return { motivation: prevState.motivation + inc };
    });
  };
  // called every time we receive props or state changes
  componentDidUpdate() {
    // if the game is 'over' then don't start a timer
    if (this.state.burnout) return;
    // if we have data and aren't currently running then start
    if (this.state.fetched && !this.state.running) {
      this.setState({ running: true });
      this.startTimer();
    }
  }
  // called when React removes the component
  componentWillUnmount() {
    // stops the timer from continuing to run
    clearInterval(this.interval);
  }
  render() {
    const { error, data: { name, img }, motivation, burnout } = this.state;
    return (
      <TamagotchiView
        error={error}
        name={name}
        motivation={motivation}
        img={img}
        incrementMotivation={this.incrementMotivation}
        burnout={burnout}
        updateData={this.updateData}
      />
    );
  }
}

export default Tamagotchi;
