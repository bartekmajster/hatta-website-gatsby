import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 80px);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  h1 {
    font-size: 52px;
    margin: 20px 0 0 0;
    width: 60%;
    line-height: 0.9;
    padding: 0;
  }

  p {
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.5px;
    width: 60%;
    padding: 0;
    margin: 0;
  }
  h2 {
    padding: 0;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    h1,
    h2,
    p {
      width: 100%;
    }
  }
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  z-index: 999;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 20px;
    position: relative !important;
    width: 100%;
    height: 60vh;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-top: 40px;
  }
`;

const StyledHr = styled.div`
  background-color: black;
  width: 150%;
  transform: translateX(-10%);
  height: 4px;
`;

const AboutPage = ({ data }) => (
  <>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
    <ContentWrapper>
      <h1>About</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
      <StyledHr />
      <p>
        Architectural design is primarily driven by the holistically creative
        manipulation of mass, space, volume, texture, light, shadow, materials,
        program, and Realistic elements such as cost, construction and
        technology, in order to achieve an end which is aesthetic, functional
        and often artistic. This distinguishes Architecture from engineering
        design, which is usually driven primarily by the creative application of
        mathematical and scientific principles.
      </p>
      <h2>Abigail Donutdough</h2>
      <StyledHr />
    </ContentWrapper>
  </>
);

export const query = graphql`
  {
    file(name: { eq: "about_photo" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
