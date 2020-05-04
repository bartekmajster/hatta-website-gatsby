import React from 'react';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const StyledImage = styled(Image)`
  width: 40%;
`;

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <StyledImage
        fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
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
