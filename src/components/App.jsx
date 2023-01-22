import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonGroup = ['good', 'neutral', 'bad'];

  changeFeedback = name => {
    this.setState(prevState => {
      // console.log(prevState);
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const res = (this.state.good / this.countTotalFeedback()) * 100;
    return res ? res.toFixed(1) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        {this.buttonGroup.map(e => (
          <button key={e} type="button" onClick={() => this.changeFeedback(e)}>
            {e}
          </button>
        ))}

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export { App };