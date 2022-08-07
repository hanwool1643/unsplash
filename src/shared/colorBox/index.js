import React from 'react';
import styled from 'styled-components';

export default function ColorBox({ color }) {
  return (
    <Container>
      <Dot style={{ backgroundColor: color }} />
    </Container>
  );
}

export const ColorContainerBox = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
`;

const Dot = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  //background-color: blue;
`;
