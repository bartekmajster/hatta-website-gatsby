import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <StyledImage
        fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </StyledWrapper>
  );
};

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`;

export default PostLayout;
