import React from 'react';
import styled from 'styled-components';

const Stop = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.stopReached};
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontsm};
  outline: none;
  border: none;
  padding: 0.9rem 1.1rem;
  margin: 0.5rem;

  border-radius: 50%;
  cursor: pointer; 
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
    color: ${props => props.theme.body};
  }

  &::after {
    content: ' '; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);  
    border: 2px solid ${props => props.theme.stopReached};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);  
    padding: 0.3rem;
  }

  @media (max-width: 64em) {
  font-size: ${props => props.theme.fontxs};
  padding: 0.7rem 0.9rem;
  margin: 0.5rem;
  }

  @media (max-width: 30em) {
    // overflow: visible;
  font-size: ${props => props.theme.fontxs};
  padding: 0.4rem 0.6rem;
  margin: 0.5rem;
  }

`

const Stops = ({text, link}) => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Stop 
      onClick = 
        { () => {
          link(text);
          scrollTo('album');
          }
        }
    >
      {text}
    </Stop>
  )
}

export default Stops;