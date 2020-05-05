import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../assets/styles/globalStyles';
import Navigation from '../components/Navigation/Navigation';
import { mainTheme } from '../assets/styles/theme';
import Burger from '../components/Burger/Burger';
import Menu from '../components/Menu/Menu';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  padding: 80px 86px 0;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 40px 46px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={mainTheme}>
      <>
        <GlobalStyle />
        <Wrapper>
          <Navigation />
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          {children}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
