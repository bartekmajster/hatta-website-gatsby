import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Button from '../components/Button/Button';

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10px;

  h1 {
    font-size: 105px;
    margin: 0;
    width: 80%;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-right: 20px;
    width: 50%;

    h1 {
      width: 100%;
      font-size: 95px;
    }

    p {
      margin: 60px 0 40px;
      width: 60%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    background-color: transparent;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 1000;

    h1 {
      width: 70%;
    }

    p {
      font-size: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      width: 90%;
      font-size: 75px;
    }
  }
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract,architects must work from
        the abstract to real.
      </p>
      <Button as={Link} to="/gallery">
        projects
      </Button>
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
