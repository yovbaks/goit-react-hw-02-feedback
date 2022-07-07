import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notifications/Notifications';
import Statistics from 'components/Statistics/Statistics';
import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    console.log('Hello Good');
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    console.log('Hello Bad');
  };
  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    console.log('Hello Neutral');
  };

  countTotalFeedback = () => {
    // return Object.values(this.state).reduce((total, item) => total + item, 0);
      return 10
  };

  //   countPositiveFeedbackPercentage = () => {
  //     const { good } = this.state;
  //     let positiveFeedbackPercentage = (good / this.countTotalFeedback()) * 100;
  //     if (!positiveFeedbackPercentage) {
  //       positiveFeedbackPercentage = 0;
  //     }
  //     return Math.floor(positiveFeedbackPercentage);
  //   };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please live feedback" />
        <FeedbackOptions
          clickBad={this.handleBad}
          clickGood={this.handleGood}
          clickNeutral={this.handleNeutral}
        />
        <Section title="Statistics" />
        {/* {total() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePercentage}
          />
        ) : (
           <Notification message="There is no feedback" />
        )}
        <Notification message="There is no feedback" /> */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
        />
      </div>
    );
  }
}

export default Feedback;
