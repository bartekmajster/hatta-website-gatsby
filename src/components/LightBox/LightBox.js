import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const StyledWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
  }
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 700px;
    height: 400px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 600px;
    height: 300px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 400px;
    height: 200px;
  }
`;

const LightBox = ({ modal, id }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/gallery/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 700, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          id
        }
      }
    }
  `);

  const [image] = data.allFile.nodes.filter(item => item.id === id);

  return (
    <StyledWrapper>
      <InnerWrapper ref={modal}>
        <Image fluid={image.childImageSharp.fluid} />
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LightBox;
