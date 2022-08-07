import React from 'react';
import styled from 'styled-components';

export default function RatioBox({ children, width = 1, height = 1 }) {
  return (
    <Container style={{ paddingBottom: `${(height / width) * 100}%` }}>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  //padding-bottom: 50%;
  
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
