import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  overflow: hidden;
`;

const StyledImage = styled(Image)`
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
    transform: scale(1.1);
  }
  &:hover:before {
    opacity: 0.1;
  }
`;

const Preview = ({ background, slug, children }) => (
  <PreviewWrapper to={`articles/${slug}`}>
    <StyledImage fluid={background} />
    {children}
  </PreviewWrapper>
);

export default Preview;
