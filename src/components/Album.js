import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Section = styled.section`
  width: 100%;
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 

  @media(max-width:64rem){
    min-height: 60vh;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`

const Container = styled.div`
  width: 80%;
  margin; 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64rem){
    width: 95%;
    min-height: 0vh;
  }
`

const Album = ({selectedSlide}) => {
  return (
    <Section id="album">
      <Container>
        <Carousel selectedSlide={selectedSlide}/>
      </Container>
    </Section>
  )
}

export default Album;