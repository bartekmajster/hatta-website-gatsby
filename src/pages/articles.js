import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import StyledImage from '../components/StyledImage/StyledImage';
import PageInfo from '../components/PageInfo/PageInfo';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding-bottom: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
    grid-template-columns: 1fr;
  }
`;

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data;
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {nodes.map(
          ({ excerpt, frontmatter: { title, featuredImage, slug } }) => (
            <StyledImage
              type="article"
              title={title}
              excerpt={excerpt}
              background={featuredImage.childImageSharp.fluid}
              key={title}
              slug={slug}
            />
          )
        )}
      </ArticlesWrapper>
    </>
  );
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default ArticlesPage;
