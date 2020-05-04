import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

const Wrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  overflow: hidden;
`;

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    z-index: 999;
    opacity: 0;
    top: 0;
    left: 0;
    transition: 0.3s;
  }

  &:hover {
    transform: scale(1.05);
  }
  &:hover:before {
    opacity: 0.1;
  }
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  pointer-events: none;

  h2,
  p {
    margin: 5px;
  }
`;

const StyledImage = ({ title, excerpt, background, slug, type }) => (
  <Wrapper to={`articles/${slug}`}>
    <StyledImg fluid={background} />
    {type === 'article' && (
      <PreviewInfoLabel>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </PreviewInfoLabel>
    )}
  </Wrapper>
);

export default StyledImage;
