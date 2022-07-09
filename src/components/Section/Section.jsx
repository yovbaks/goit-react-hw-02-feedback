import propTypes from 'prop-types';
import { Title } from './Section.styled';
const Section = ({ title, children }) => <>{title && <Title>{title}</Title>}
{children}</>;

Section.propTypes = {
  title: propTypes.string,
};

export default Section;
