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
  min-width: 50%;
  max-height: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 80%;
    min-height: 80%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 95%;
    height: 80%;
  }
`;

const LightBox = ({ modal, id }) => {
  const data = useStaticQuery(graphql`
    query singleImage {
      allDatoCmsGallery {
        nodes {
          image {
            originalId
            fixed(width: 1200, height: 800) {
              ...GatsbyDatoCmsFixed_noBase64
            }
          }
        }
      }
    }
  `);

  const [image] = data.allDatoCmsGallery.nodes[0].image.filter(
    item => item.originalId === id
  );

  return (
    <StyledWrapper>
      <InnerWrapper ref={modal}>
        <Image fixed={image.fixed} />
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default LightBox;
