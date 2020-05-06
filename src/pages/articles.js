import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { graphql } from 'gatsby';
import StyledImage from '../components/StyledImage/StyledImage';
import PageInfo from '../components/PageInfo/PageInfo';
import SEO from '../components/Seo/seo';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <>
      <SEO title="Articles" />
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage }) => (
          <StyledImage
            type="article"
            title={title}
            background={featuredImage.fluid}
            key={title}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
