import React from 'react';
import styled from 'styled-components';
import BnP from '../assets/bnp.png';


const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.themeColor};
  padding: 2rem 0;
  
  @media(max-width: 64rem){
    padding: 1rem 0;
  }
`
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 3rem;
  color: white;

  @media (max-width: 64rem){
    width: 95%;
  }
  @media (max-width: 30rem){
    background-size: 70%;
    padding-bottom: 1rem;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 750px){
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  display: inline-block;
  img{
    width: 480px;
  }

  @media(max-width: 64rem){
    img{
      width: 400px;
    }
  }
  @media(max-width: 30rem){
    padding-top: 0.5rem;
    img{
      width: 300px;
    }
  }
`

const Title = styled.h2`
  font-family: "Permanent Marker", cursive; 
  font-style: italic;
  width: inherit;
  font-size: ${props => props.theme.fontxxl};
  font-weight: 600;
  padding-top: 1.5rem;
  padding-bottom: 1rem;

  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontxl};
    padding-bottom: 1.5rem;
  }
`

const Text = styled.p`
  width: inherit;
  font-size: 20px;
  font-weight: 100;
  line-height: 1.5em;
  margin: auto;
  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 30rem){
    font-size: ${props => props.theme.fontsm};
  }
`

const Story = () => {
  return (
    <Section id="story">
      <Container>
        <Title>Story</Title>
        <Box>
          <Text>
            One night, P(the big one) and B(the little one) decided to leave their planet - Planet P and go to the moon. <br />
            It was too competitive to live in Planet P and they felt exhausted. <br />
            They believed in a better future in the moon. <br /><br />

            They decided to RUN to the moon. <br />
            It takes 330km from Planet P to the moon and there are 9 stops along the way - each aprated 33km. <br />
            Everytime they reach the stop, a NFT will be minted to celebrate their achievement. <br /><br />

            Please give a support on their journey!
          </Text>
          <ImageContainer>
            <img src={BnP} alt="Image of B and P" />
          </ImageContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default Story;