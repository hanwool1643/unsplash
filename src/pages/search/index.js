import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import SearchLnb from './shared/searchLnb';
import Related from './shared/related';

// {children} 대신 Route 안의 자식을 가져오기 위해서 Outlet을 씀

export default function Search() {
  return (
    <Container>
      <SearchLnb />
      <Related />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`

`;
