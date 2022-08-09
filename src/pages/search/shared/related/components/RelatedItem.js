import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function RelatedItem({ item }) {
  return (
    <Container>
      <Link to={`/search/photos/${item.title}`}>
        <div>{item.title}</div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  &:first-child {
    margin-left: 0;
  }
  //& + & {//위에거랑동일
  //  margin-left: 8px;
  //}
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    height: 43px;
    white-space: nowrap;
    flex-shrink: 0;
    border:  1px solid #000;
    border-radius: 3px;
    margin-left: 8px;
  }
`;
