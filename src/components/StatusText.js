import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Text = styled.h2`
  width: 80%;
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  
  span {
    font-family: "Kalam", cursive;

  }

  span.distance {
    color: ${props => props.theme.themeColor};
  }

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontxl};
  }
  
  // @media (max-width: 30em) {
  //   width: 100%;
  //   text-align: center;
  //   font-size: ${props => props.theme.fontxl};
  // }

`

const StatusText = ({totalDistance}) => {

  const remainingDistance = (33 - Number(totalDistance)).toFixed(1);

  console.log('Distance Left:', remainingDistance);

  return (
    <Text><span className="distance">{remainingDistance}km</span> away from the 
      <Typewriter
        options={{autoStart: true,
          loop: true}}
        onInit={(typewriter) => {
        typewriter.typeString("1st Stop")
          .pauseFor(2000)
          .deleteAll()
          .typeString("1st NFT Minting")
          .pauseFor(2000)
          .deleteAll()
          .start();
        }}
      />
    </Text>
  )
}

export default StatusText;