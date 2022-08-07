import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { IconCollection, IconImage, IconUser } from '../../../../incons';

export default function SearchLnb() {
  const { query } = useParams();
  return (
    <Container>
      <Nav>
        <Link to={`/search/photos/${query}`}>
          <IconImage />
          <div className="title">Photos</div>
          <div className="count">10K</div>
        </Link>
        <Link to={`/search/collections/${query}`}>
          <IconCollection />
          <div className="title">Collections</div>
          <div className="count">3.9K</div>
        </Link>
        <Link to={`/search/users/${query}`}>
          <IconUser />
          <div className="title">Users</div>
          <div className="count">10K</div>
        </Link>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px;
  font-size: 14px;
  color: #767676;
  text-transform: capitalize;
`;
const Nav = styled.div`
  display: flex;
  & + &:first-child {
    padding-left: 32px;
  }
  a {
    display: flex;
    align-items: center;
    height: 56px;
    margin-left: 32px;
    svg {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    .title {
      margin-right: 10px;
    }
    
  }
`;
