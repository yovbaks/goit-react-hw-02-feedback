import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notifications/Notifications'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#010101',
      }}
    >
      <Section title="Please live feedback" />
      <FeedbackOptions />
      <Section title="Statistics" />
      <Notification message="There is no feedback"/>
      <Statistics />
    </div>
  );
};
