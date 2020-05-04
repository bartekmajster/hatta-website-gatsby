import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../assets/styles/globalStyles';
import Navigation from '../components/Navigation/Navigation';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
