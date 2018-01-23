import React from 'react';

const DEC_INTERVAL = 500;

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: props.initialFollowers,
    };
  }
  decrementFollowers = () => {
    this.interval = setInterval(() => {
      this.setState(
        prevState => {
          return { followers: prevState.followers - 1 };
        },
        () => {
          if (this.state.followers === 0) {
            this.props.toggleBurnout();
          }
        }
      );
    }, DEC_INTERVAL);
  };
  incrementFollowers = () => {
    if (this.state.followers === this.props.initialFollowers) return;
    this.setState(prevState => {
      return { followers: prevState.followers + 1 };
    });
  };
  componentDidMount() {
    this.decrementFollowers();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const percent = Math.round(
      this.state.followers / this.props.initialFollowers * 100
    );
    return (
      <div>
        <span>{percent}%</span>
        <button onClick={this.incrementFollowers}>Feed a follower</button>
      </div>
    );
  }
}

export default Followers;
