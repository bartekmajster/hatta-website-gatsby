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
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 52px;
    margin: 0;
    width: 60%;
    line-height: 0.9;
  }

  p {
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0.5px;
    margin: 60px 0 40px;
    width: 60%;
  }
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
`;

const StyledHr = styled.div`
  background-color: black;
  width: 150%;
  transform: translateX(-10%);
  height: 4px;
`;

const AboutPage = ({ data }) => (
  <>
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
    <StyledImage fluid={data.file.childImageSharp.fluid} />
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
