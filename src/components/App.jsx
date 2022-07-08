
import Feedback from './Feddback';





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
      {/* <Counter initialValue={10} /> */}
      <Feedback/>
      
    </div>
  );
};
