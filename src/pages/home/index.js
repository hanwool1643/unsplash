import React from 'react';
import styled from 'styled-components';
import MainBanner from './components/MainBanner';
import PhotoList from './components/PhotoList';

export default function Home() {
  const color = ['red', 'blue', 'green', 'yellow', 'purple'];
  return (
    <Container>
      <MainBanner />
      <PhotoList />
      {/* <ColorContainerBox> */}
      {/*    { */}
      {/*        color.map((item)=><ColorBox color={item}/>) */}
      {/*    } */}
      {/* </ColorContainerBox> */}
      {/* <ColorBox2 color={"black"}/> */}
    </Container>
  );
}

const Container = styled.div`

`;
