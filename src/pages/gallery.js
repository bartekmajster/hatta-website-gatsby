import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PageInfo from '../components/PageInfo/PageInfo';
import StyledImage from '../components/StyledImage/StyledImage';
import useDetectOutsideClick from '../hooks/useDetectOutsideClick';
import LightBox from '../components/LightBox/LightBox';

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding-bottom: 50px;
`;

const pageData = {
  title: 'gallery',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};
const GalleryPage = ({
  data: {
    allFile: { nodes },
  },
}) => {
  const [isModalOpen, setTooltipVisibility] = useState(false);
  const [openedImageID,setOpenedImageID] = useState('');
  const modal = useRef(null);

  useDetectOutsideClick(modal, setTooltipVisibility);

  const handleOpen = id => {
    setTooltipVisibility(!isModalOpen);
    setOpenedImageID(id);
  };

  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
        {nodes.map(item => (
          <StyledImage
            type="galleryImage"
            background={item.childImageSharp.fluid}
            key={item.id}
            openModal={() => handleOpen(item.id)}
            isOpen={isModalOpen}
          />
        ))}
      </ArticlesWrapper>
      {isModalOpen && <LightBox modal={modal} id={openedImageID}/>}
    </>
  );
};

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
        id
      }
    }
  }
`;

export default GalleryPage;
