import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.themeColor};
  // position: sticky; 
  top: 0;
  z-index: 100;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem;
  width: 90%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items; center;
  list-style: none;

  @media(max-width: 64em) {
  //   position: fixed;
  //   top: ${props => props.theme.navHeight};
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   width: 100vw;
  //   height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  //   z-index: 130;
  //   background-color: ${props => `rgba(${props.theme.body}, 0.85)`};

  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;

  //   backdrop-filter: blur(2px); 
    display: none;
  }
  
`
const MenuItems = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontlg};
  // font-weight: bold;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text}; 
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`
const HamburgerMenu = styled.span`
   width: ${props => props.click? '2rem' : '1.5rem'};
   height: 2px;
   background: ${props => props.theme.text};

   position: absolute;
   top: 3rem;
   left: 90%;
   transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
   
   display: none;
   justify-content: center;
   align-items: center;

   cursor: pointer;
   transition: all 0.3s ease;
  
   @media (max-width: 64em){
     display: flex;
   }

  &::after, &::before {
    content: ' ';
    width: ${props => props.click? '1rem': '1.5rem'};
    height: 2px;
    right: ${props => props.click? '-2px': '0'};
    background: ${props => props.theme.text};
    position: absolute ;
  }

  &::after {
    top: ${props => props.click ? '0.3rem': '0.5rem'};
    transform: ${props => props.click? 'rotate(-40deg)': 'rotate(0)'};
  }

  &::before {
    bottom: ${props => props.click ? '0.3rem': '0.5rem'};
    transform: ${props => props.click? 'rotate(40deg)': 'rotate(0)'};
  }
`


const Navigation = () => {

  const [ click, setClick ] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  return (
    <Section id="navi">
      <NavBar>
        <Logo />
        <HamburgerMenu click = { click } onClick = {() => setClick( !click )}>
          &nbsp;
        </HamburgerMenu>
        <Menu>
          <MenuItems onClick={ () => scrollTo('home') }>Home</MenuItems>
          <MenuItems onClick={ () => scrollTo('album') }>Album</MenuItems>
          <MenuItems onClick={ () => scrollTo('status') }>Status</MenuItems>
          <MenuItems onClick={ () => scrollTo('records') }>Records</MenuItems>
        </Menu>
        {/* <Button text="Connect Wallet" link="https://google.com"/> */}
      </NavBar>
    </Section>
  )
}
 
export default Navigation;