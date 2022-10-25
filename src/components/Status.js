import React from 'react';
import styled from 'styled-components';
// import { useEffect, useState } from 'react';
import StatusText from './StatusText';
import StatusChart from './StatusChart';

const Section = styled.section`
  width: 100%; 
  background-color: ${props => props.theme.text};
  positoin:relative;
  padding: 2rem 0;
  padding-bottom: 0;
  
  @media(max-width: 64rem){
    padding: 1rem 0;
    padding-bottom: 0;
  }
`
const Container = styled.div`
  width: 75%;
  min-height: 60vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center; 

  @media(max-width:64em) {
    flex-direction: column;
    min-height: 50vh;
  }
`
const Box = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width:64em) {
    width: 100%;
    margin: 1.5rem;
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
  color: white;
  font-family: "Permanent Marker", cursive; 
  font-style: italic;
  width: inherit;
  font-size: ${props => props.theme.fontxxl};
  font-weight: 600;
  padding-top: 1.5rem;
  // padding-bottom: 1.5rem;

  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontxl};
    padding-bottom: 0.5rem;
  }
`

const Text = styled.p`
  color: white;
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

const Status = ({totalDistance}) => {

  console.log('from status.js', totalDistance)

  return (
  <Section id="status">
    <TextContainer>
      <Title>Status</Title>
    </TextContainer>
    <Container>
      <Box>
        <StatusText totalDistance={totalDistance}/>
      </Box>
      <Box>
        <StatusChart totalDistance={totalDistance}/>
      </Box>
    </Container>  
  </Section>
  )
}

export default Status;
