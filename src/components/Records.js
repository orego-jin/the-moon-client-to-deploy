import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer, BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

// import fetcher from '../lib/fetcher';
// import useSWR from 'swr';

const staticData = [
  {startDate: '2022/09/18', distance: 3},
  {startDate: '2022/09/19', distance: 5},
  {startDate: '2022/09/19', distance: 5},
  {startDate: '2022/09/19', distance: 5},
  {startDate: '2022/09/19', distance: 5},
  {startDate: '2022/09/19', distance: 5},
 
  {startDate: '2022/09/20', distance: 9}
]

const Section = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 64rem) {
    min-height: 40vh;
  }
`

const Title = styled.h2`
  text-align: center;
  margin-top: 3rem;
  padding: 1rem;
  text-transform: capitalize;
  font-size: ${props => props.theme.fontxxl};
  color: ${props => props.theme.text};

  @media(max-width:30em) {
    margin-top: 1.5rem;
    font-size: ${props => props.theme.fontlg}; 
    span {
      display: inline-block;
    }
  }
`

const Box = styled.div`
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
      <Title>Records for the <span>1st Stop</span></Title>
      <Box>
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
      </Box>
    </Section>
  )
}

export default Records;