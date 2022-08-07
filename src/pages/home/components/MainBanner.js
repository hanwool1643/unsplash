import React from 'react';
import styled from 'styled-components';
import { Screen } from '../../../shared/layout/Layout.Styled';
import SearchBox from '../../../shared/searchBox';

export default function MainBanner() {
  return (
    <Container>
      <Screen alpha={0.6} />
      <Content>
        <h1>Unsplash</h1>
        <p>
          The internet’s source of freely-usable images.
          <br />
          Powered by creators everywhere.
        </p>
        <SearchBox shape="square" />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 594px;
  background: #fff url('https://images.unsplash.com/photo-1658279366986-4f188712a3e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60') 50% 50% / cover  no-repeat;
`;

const Content = styled.div`
  width: 100%;
  z-index: 50;
  max-width: 860px;
  h1 {
    font-size: 46px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: bold; 
  };
  p {
    font-size: 18px;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 20px;
  }
`;
