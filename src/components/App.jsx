import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = name => {
    this.setState(prevState => {
      return { [name]: (prevState[name] += 1) };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {
    return (
      <Section
        title="Please leave feedback"
        total={this.countTotalFeedback()}
        percentage={this.countPositiveFeedbackPercentage()}
        stats={this.state}
        push={this.addFeedback}
      ></Section>
    );
  }
}
