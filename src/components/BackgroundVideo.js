import React from 'react';
import styled from 'styled-components';
import GIF from '../assets/galaxy.mp4';


const VideoContainer = styled.div`
  width: 100%;
  height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  video {
    width: 100%;
    height: auto;
  }
  z-index: -3;

  @media (max-width: 64em) {
    video {
      width: auto;
      height: 100%;
    }
  }
`

const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop /> 
    </VideoContainer>
  )
}

export default BackgroundVideo;