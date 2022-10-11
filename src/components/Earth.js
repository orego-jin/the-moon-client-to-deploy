import React from 'react';
import { Canvas } from '@react-three/fiber';
import Moon from './Moon.js';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const Container = styled.div`
  #c {
    @media (max-width: 64em) {
      height: 100px;
    }
  }
`

const Earth = () => {
  return (
    <Container>
      <Canvas id = "c"
        style={
          {height: "500px"}
        }
        dpr={[1, 2]}
      >
        {/* <OrbitControls /> */}
        <directionalLight intensity={0.5}/>
        <ambientLight intensity={0.2} />
        <Moon />
      </Canvas>
    </Container>
  )
}

export default Earth;