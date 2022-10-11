import React from 'react';
import styled from 'styled-components'
// import { Link } from 'react-router-dom';

const LogoText = styled.h1`
  font-family: "Kalam", cursive;
  font-size: ${props => props.theme.fontxxl};
  color: ${props => props.theme.text};
  transition: all 0.2s ease;
  &:hover{
    transform: scale(1.1);
  }

  @media(max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
  }
  @media(max-width: 30em) {
    font-size: ${props => props.theme.fontlg};
  }
`

const Logo = () => {
  return (
    <LogoText>
      <a href="/">
        running to the moon
      </a>
     </LogoText>
  )
}

export default Logo;