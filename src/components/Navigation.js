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

  @media(max-width: 64em){
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 130;
    background-color: rgba(0,0,0,0.5);
    

    transform: ${props => props.click? 'translateY(0)' : 'translateY(100%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    backdrop-filter : blur(2px); 
  }
  
`
const MenuItems = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: 22px;

  // &::after {
  //   content: ' ';
  //   display: block;
  //   width: 0%;
  //   height: 3px;
  //   // background: ${props => props.theme.text}; 
  //   background: ${props => props.theme.carouselColor};
  //   transition: width 0.3s ease;
  // }

  // &:hover::after {
  //   width: 100%;
  // }

  transition: all 0.3s ease;

  &:hover{
    color: ${props => props.theme.carouselColor};
  }

  @media(max-width: 64em) {
    margin: 1rem 0;
    &::after {
      display: none;
    }
    color: white;
  }

`
const HamburgerMenu = styled.span`
   width: 2rem;
   height: 2px;
   background: ${props => props.theme.text};

   position: absolute;
   top: 2.5rem;
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
    width: 2rem;
    height: 2px;
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: 0.6rem;
  }

  &::before {
    bottom: 0.6rem;
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
    setClick(!click);
  }
  
  return (
    <Section id="navi">
      <NavBar>
        <Logo />
        <HamburgerMenu click = { click } onClick = {() => setClick( !click )}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItems onClick={ () => scrollTo('home') }>Home</MenuItems>
          <MenuItems onClick={ () => scrollTo('story') }>Story</MenuItems>
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