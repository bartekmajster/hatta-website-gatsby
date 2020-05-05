import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  width: 100%;
`;

const StyledLink = styled(Link)`
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #000;
  text-decoration: none;
  transition: color 0.3s linear;
  font-size: 1.5rem;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/articles" onClick={() => setOpen(false)}>
        articles
      </StyledLink>
      <StyledLink to="/about" onClick={() => setOpen(false)}>
        about
      </StyledLink>
      <StyledLink to="/gallery" onClick={() => setOpen(false)}>
        gallery
      </StyledLink>
      <StyledLink to="/contact" onClick={() => setOpen(false)}>
        contact
      </StyledLink>
    </StyledMenu>
  );
};
export default Menu;
