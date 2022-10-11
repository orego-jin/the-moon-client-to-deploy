import React from 'react';
import styled from 'styled-components';
// import { useEffect, useState } from 'react';
import StatusText from './StatusText';
import StatusChart from './StatusChart';

const Section = styled.section`
  width: 100%; 
  background-color: ${props => props.theme.text};
  positoin:relative;
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
// const Records = styled.ul`
//   list-style: none;
// `
// const RecordItem = styled.li`
//   color: #444;
// `

const Status = ({totalDistance}) => {

  console.log('from status.js', totalDistance)

  return (
  <Section id="status">
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
