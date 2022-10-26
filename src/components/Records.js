import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';
import StravaLogo from '../assets/stravaV.svg';
// const staticData = [
//   {startDate: '2022/09/18', distance: 3},
//   {startDate: '2022/09/19', distance: 5},
//   {startDate: '2022/09/19', distance: 5},
//   {startDate: '2022/09/19', distance: 5},
//   {startDate: '2022/09/19', distance: 5},
//   {startDate: '2022/09/19', distance: 5},
//   {startDate: '2022/09/20', distance: 9}
// ]

const Section = styled.section`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  @media(max-width: 64rem) {
    min-height: 40vh;
    padding: 1rem 0;
  }
`

const Container = styled.div`
  width: 70vw;
  display: flex;
  margin: 5rem 0;
  margin-right: 2.5rem;
  
  justify-content: center;
  align-items: center;

  .custom-tooltip {
    border: 1px solid #000;
    border-radius: 3px;
    padding: 0.2em;
  }

  @media (max-width: 64rem) {
    width: 85vw;
    margin: 3rem 0;
    margin-right: 2.5rem;
  }

  @media (max-width: 30rem) {
    width: 97vw;
    margin: 1.5rem 0;
    margin-right: 2.5rem;
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
  // padding-bottom: 1.5rem;
  span {
    color: ${props => props.theme.themeColor};
  }

  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontxl};
    padding-bottom: 1rem;
    span {
      display: inline-block;
    }
  }

  @media(max-width: 630px){
    font-size: 36px;
    padding-bottom: 0.4rem;
  }
`
const Text = styled.p`
  width: inherit;
  font-size: 22px;
  font-weight: 300;
  font-style: italic;
  @media (max-width: 64rem){
    font-size: ${props => props.theme.fontmd};
    
  }
  @media (max-width: 30rem){
    font-size: ${props => props.theme.fontsm};
  }
`
const ImageBox = styled.div`
  display: inline-block;
  img{
    padding-top: 5px;
    height: 50px;
  }
  @media(max-width: 64rem){
    img{
      height: 40px;
    }
  }
  @media(max-width: 30rem){
    img{
      height: 30px;
    }
  }
`
const Box = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" >
        <p className="label">{`${label}`}</p>
        <p className="payload">{`${payload[0].value} km`}</p>
      </div>
    );
  };

  return null;
};

const Records = ({stravaData}) => {
  
  return (
    <Section id="records">
      <TextContainer>
        <Title>
          Records towards the <span>1st Stop</span>
        </Title>
        <Box>
          <Text>
            Data fetched from
          </Text>
          <ImageBox>
            <img src={StravaLogo} alt="Strava"/>
          </ImageBox>
        </Box>
      </TextContainer>

      <Container>
        <ResponsiveContainer width="99%" aspect={4.0/1.5}>
          {/* <BarChart width={730} height={250} data={stravaData}> */}
          <BarChart data={stravaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="startDate" />
            <YAxis dataKey="distance" label={{ value: 'distance', position: 'left' }} />
            <Tooltip
              content={<CustomTooltip />}
            />
            <Bar dataKey="distance" fill="#de3525" />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </Section>
  )
}

export default Records;