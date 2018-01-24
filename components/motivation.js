import React from 'react';
import Tamagotchi from './tamagotchi';

const DEC_INTERVAL = 1000;
const INC_AMOUNT = 10;

const messages = [
  'Compliment their CSS skills',
  'Tell them you love the way they indent their code',
  'Send them an adorable otter gif',
  'Star their side-project',
];

class Motivation extends React.Component {
  state = {
    running: false,
    motivation: 0,
    burnout: false,
  };
  startTimer = () => {
    this.setState({ motivation: 100 });
    this.interval = setInterval(() => {
      this.setState(
        prevState => {
          return { motivation: prevState.motivation - 1 };
        },
        () => {
          if (this.state.motivation < 1) {
            this.setState({ burnout: true, running: false });
            clearInterval(this.interval);
          }
        }
      );
    }, DEC_INTERVAL);
  };
  incrementMotivation = () => {
    if (this.state.motivation + INC_AMOUNT > 100) {
      return this.setState({ motivation: 100 });
    }
    this.setState(prevState => {
      return { motivation: prevState.motivation + INC_AMOUNT };
    });
  };
  componentDidUpdate() {
    if (this.props.start && !this.state.running) {
      this.setState({ running: true });
      this.startTimer();
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { motivation, burnout } = this.state;
    const { name, img } = this.props;
    return (
      <div>
        <Tamagotchi
          name={name}
          motivation={motivation}
          img={img}
          incrementMotivation={this.incrementMotivation}
          burnout={burnout}
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

export default Motivation;
