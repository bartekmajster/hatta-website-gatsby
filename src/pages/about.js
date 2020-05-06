import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/Seo/seo';

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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 800px;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 40px;
  }
`;

const StyledHr = styled.div`
  background-color: black;
  width: 100%;
  height: 4px;
`;

const AboutPage = ({ data }) => {
  const {
    datoCmsAbout: {
      photo: { fluid },
      introduce,
      longIntroduce,
      name,
    },
  } = data;

  return (
    <>
      <SEO title="About" />
      <StyledImage fluid={fluid} />
      <ContentWrapper>
        <h1>About</h1>
        <p>{introduce}</p>
        <StyledHr />
        <p>{longIntroduce}</p>
        <h2>{name}</h2>
        <StyledHr />
      </ContentWrapper>
    </>
  );
};

export const query = graphql`
  query queryAbout {
    datoCmsAbout {
      introduce
      longIntroduce
      name
      photo {
        fluid(maxWidth: 800, maxHeight: 1200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
