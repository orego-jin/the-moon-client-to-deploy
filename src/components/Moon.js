import React from 'react';
import { Canvas } from '@react-three/fiber';
import MoonThree from './MoonThree';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;

  @media(max-width: 30rem) {
    height: 300px;
  }
`

const Moon = () => {
  return (
    <Container>
      <Canvas
        dpr={[1, 2]}
      >
        {/* <OrbitControls /> */}
        <directionalLight intensity={0.5}/>
        <ambientLight intensity={0.2} />
        <MoonThree />
      </Canvas>
    </Container>
  )
}

export default Moon;