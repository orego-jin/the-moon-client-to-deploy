import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

// import fetcher from '../lib/fetcher';
// import useSWR from 'swr';

// const staticData = [
//   {startDate: '2022/09/18', distance: 3},
//   {startDate: '2022/09/19', distance: 5},
//   {startDate: '2022/09/20', distance: 9}
// ]

const Section = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
`

const Title = styled.h2`
  text-align: center;
  margin: 2rem;
  padding: 1rem;
  text-transform: capitalize;
  font-size: ${props => props.theme.fontxl};
  color: ${props => props.theme.text};
`

const Box = styled.div`
  display: flex;
  margin: auto 0;
  justify-content: center;
  align-items: center;

  .custom-tooltip {
    border: 1px solid #000;
    border-radius: 3px;
    padding: 0.2em;
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
      <Title>Records for the 1st Stop</Title>
      <Box>
        <BarChart width={730} height={250} data={stravaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="startDate" />
          <YAxis dataKey="distance" label={{ value: 'distance', position: 'left' }} />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Bar dataKey="distance" fill="#de3525" />
        </BarChart>
      </Box>
    </Section>
  )
}

export default Records;