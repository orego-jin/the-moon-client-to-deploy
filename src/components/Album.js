import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Section = styled.section`
  width: 100%;
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  background-color: ${props => props.theme.body};
  overflow: hidden;
  padding-top: 2rem;
  
  @media(max-width: 64rem){
  padding-top: 2rem;
  }
`

const Container = styled.div`
  margin; 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 

  @media(max-width:64rem){
    min-height: 60vh;
    margin; 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 64rem){
    margin; 0 auto;
    width: 95%;
    min-height: 0vh;
  }
`
const TextContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media (max-width: 64rem){
    width: 95%;
  }
`

const Title = styled.h2`
  font-family: "Permanent Marker", cursive; 
  font-style: italic;
  width: inherit;
  font-size: ${props => props.theme.fontxxl};
  font-weight: 600;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontxl};
    padding-bottom: 1rem;
    padding-top: 0.5rem;
  }
`

const Text = styled.p`
  width: inherit;
  font-size: 22px;
  font-weight: 300;
  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 30rem){
    font-size: ${props => props.theme.fontsm};
  }
`


const Album = ({selectedSlide}) => {
  return (
    <Section id="album">
      <TextContainer>
        <Title>Album</Title>
      </TextContainer>
      <Container>
        <Carousel selectedSlide={selectedSlide}/>
      </Container>
    </Section>
  )
}

export default Album;