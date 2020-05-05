import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  border: none;
  padding: 10px 25px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
  outline: black;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export default Button;
