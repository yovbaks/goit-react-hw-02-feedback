import propTypes from 'prop-types';
import {StatList, StatItem} from './Statistics.stylde';

const Statistics = () => (
  <StatList>
    <StatItem>Good: 0</StatItem>
    <StatItem>Neutral: 0</StatItem>
    <StatItem>Bad: 0</StatItem>
    <StatItem>Positive feedback: 43 %</StatItem>
  </StatList>
);

Statistics.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default Statistics;
