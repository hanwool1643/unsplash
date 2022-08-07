import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Header from './shared/header';
import { GlobalStyle } from './style/GlobalStyle';
import Search from './pages/search';
import Photos from './pages/search/photos';
import Collections from './pages/search/collections';
import Users from './pages/search/users';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />}>
          <Route path="photos/:query" element={<Photos />} />
          <Route path="collections/:query" element={<Collections />} />
          <Route path="users/:query" element={<Users />} />
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div`

`;
