import React from 'react';
import styled from 'styled-components';
import BackgroundVideo from './BackgroundVideo';
import Moon from './Moon';
import Stops from './Stops';

const Section = styled.section`
  width: 100vw;
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  position: relative;
  background-color: ${props => props.theme.body};
  
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 64em){
    display: flex;
  }
`
const MoonContainer = styled.div`
  position: absolute;
  top: 5rem;
  width: 50%;
  // transform: translate(-50%, 0);
  z-index: 2;
  // background-color: blue;

  @media (max-width: 64em){
    width: 100%;
  }
`

const StopContainer= styled.div`
  width: 55%;
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  position: absolute;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em){
    width: 100%;
  }
`

const Home = ({setSelectedSlide}) => {
  
  const slideSetter = (i) => {
    // console.log('Clicked!')
    setSelectedSlide(i);
    // console.log(i)
  }

  return (
    <Section id="home">
      <Container>
        <MoonContainer>
          <Moon /> 
        </MoonContainer>
        <StopContainer>
          <Stops text={9} link={slideSetter}/>
          <Stops text={8} link={slideSetter}/>
          <Stops text={7} link={slideSetter}/>
          <Stops text={6} link={slideSetter}/>
          <Stops text={5} link={slideSetter}/>
          <Stops text={4} link={slideSetter}/>
          <Stops text={3} link={slideSetter}/>
          <Stops text={2} link={slideSetter}/>
          <Stops text={1} link={slideSetter}/>
        </StopContainer>
      </Container>

      <BackgroundVideo /> 
    </Section>
  )
}

export default Home;