import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 999;

  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 20px;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 34px;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">HATTA</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/articles">articles</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">gallery</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
