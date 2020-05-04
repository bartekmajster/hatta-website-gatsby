import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 350px;

  h1 {
    font-size: 52px;
    margin: 0;
  }

  p {
    font-size: 18px;
    margin: 15px 0 0;
  }
`;

const StyledHeader = styled.h1`
  &:first-letter {
    text-transform: uppercase;
  }
`;

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <StyledHeader>{title}</StyledHeader>
    <p>{paragraph}</p>
  </Wrapper>
);

export default PageInfo;

PageInfo.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
