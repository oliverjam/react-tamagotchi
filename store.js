import React from 'react';

export const Store = React.createContext();

const DEC_INTERVAL = 6000;

export class Provider extends React.Component {
  state = {
    data: {},
    fetched: false,
    running: false,
    motivation: 0,
    burnout: false,
    error: false,
  };
  updateData = data => {
    if (data.error) {
      return this.setState({ error: true });
    }
    return this.setState({ data, fetched: true });
  };
  incrementMotivation = inc => {
    if (this.state.motivation + inc > 5) {
      return this.setState({ motivation: 5 });
    }
    this.setState(prevState => {
      return { motivation: prevState.motivation + inc };
    });
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
  runGame = () => {
    // if the game is 'over' then don't start a timer
    if (this.state.burnout) return;
    // if we have data and aren't currently running then start
    if (this.state.fetched && !this.state.running) {
      this.setState({ running: true });
      this.startTimer();
    }
  };
  endGame = () => {
    clearInterval(this.interval);
  };
  componentDidUpdate() {
    this.runGame();
  }
  // called when React removes the component
  componentWillUnmount() {
    // stops the timer from continuing to run
    this.endGame();
  }
  render() {
    return (
      <Store.Provider
        value={{
          state: this.state,
          updateData: this.updateData,
          incrementMotivation: this.incrementMotivation,
          runGame: this.runGame,
          endGame: this.endGame,
        }}
      >
        {this.props.children}
      </Store.Provider>
    );
  }
}
