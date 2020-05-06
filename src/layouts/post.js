import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const StyledWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 50px;
  }
`;

const StyledImage = styled(Image)`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 65%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const PostLayout = ({ data }) => {
  return (
    <StyledWrapper>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <StyledImage fluid={data.datoCmsArticle.featuredImage.fluid} />
      <div>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1];

          switch (itemKey) {
            case 'headingContent':
              return <h2 key={item.id}>{item[itemKey]}</h2>;
            case 'paragraphContent':
              return <p key={item.id}>{item[itemKey]}</p>;
            case 'imageData':
              return <StyledImage fluid={item[itemKey].fluid} key={item.id} />;
            default:
              return null;
          }
        })}
      </div>
    </StyledWrapper>
  );
};

export const query = graphql`
  query postSingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      featuredImage {
        fluid(maxWidth: 700, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`;

export default PostLayout;
