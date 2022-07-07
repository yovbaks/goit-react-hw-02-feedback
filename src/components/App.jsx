import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notifications/Notifications'
import Counter from './Counter/Counter';
import Feedback from './Feddback/Feedback';

const state = {
  good: 0,
  neutral: 0,
  bad:0,
}



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
      <Counter initialValue={10} />
      <Feedback/>
      
    </div>
  );
};
