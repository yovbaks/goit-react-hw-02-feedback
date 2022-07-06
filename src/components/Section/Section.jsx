import propTypes from 'prop-types';
import { Title } from './Section.styled';
const Section = ({ title }) => <>{title && <Title>{title}</Title>}</>;

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
