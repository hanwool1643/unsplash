import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox';
import Nav from './Nav';

export default function Header() {
  return (

    <Container>
      <Logo>
        <Link to="/">
          <svg
            width="32"
            height="32"
            className="hic6U"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg>
        </Link>
      </Logo>
      <SearchBox shape="round" />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 20px;
  height: 62px;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  margin-right: 20px;
  
  
`;
