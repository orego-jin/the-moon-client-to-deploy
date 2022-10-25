import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Instagram from '../assets/Instagram';
import Twitter from '../assets/Twitter';
import Opensea from '../assets/Opensea';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.footerColor};

  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  

  position: relative;

  @media (max-width: 64rem) {
    min-height: 20vh;
  }

  @media (max-width: 30rem) {
    min-height: 15vh;
  }

`
const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.text};

  @media (max-width: 64rem) {
    width: 90%;
    margin: 1.2rem auto;
  }
  @media (max-width: 30rem) {
    width: 97%;
    margin: 1.2rem auto;
  }
`

const Right = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  &>*{
    padding-right: 1rem;
    transform: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 30rem) {
    &>*{
      padding-right: 0.5rem;
  }
`


const Bottom = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontmd};

  @media (max-width: 64rem) {
    width: 90%;
    font-size: ${props => props.theme.fontsm};
    margin-bottom: 1rem;
  }
  
`

const Footer = () => {
  return (
    <Section id="footer">
      <Container>
        <Logo />
        <Right>
          <IconList>
            <a href="https://www.instagram.com/running2themoon/" target="_blank" rel="noopener">
            <Instagram />
            </a>

            <a href="https://twitter.com/running2themoon" target="_blank" rel="noopener">
            <Twitter />
            </a>

            <a href="" target="_blank" rel="">
            <Opensea />
            </a>

          </IconList>
        </Right>
      </Container>
      <Bottom>
        <span>      
          &copy; {new Date().getFullYear()} Sanny All rights reserved.
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer;