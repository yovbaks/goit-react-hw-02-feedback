import propTypes from 'prop-types';
import {StatList, StatItem} from './Statistics.stylde';

const Statistics = ({ good, neutral, bad,total }) => (
  
  <StatList>
    <StatItem>Good: {good}</StatItem>
    <StatItem>Neutral: {neutral}</StatItem>
    <StatItem>Bad: {bad}</StatItem>
    <StatItem>TOTAL: {total}</StatItem>
    <StatItem>Positive feedback: 43 %</StatItem>
  </StatList>
);

Statistics.propTypes = {
 
};

export default Statistics;
