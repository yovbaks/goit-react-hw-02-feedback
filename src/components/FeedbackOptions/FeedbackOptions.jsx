import { Button } from "./FeedbackOptions.styled";
const FeedbackOptions = ({clickGood,clickBad,clickNeutral}) => (
  <div>
    <Button onClick={clickGood}>Good</Button>
    <Button onClick={clickNeutral}>Neutral</Button>
    <Button onClick={clickBad}>Bad</Button>
  </div>
);

export default FeedbackOptions;