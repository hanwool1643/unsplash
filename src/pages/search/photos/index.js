import React from 'react';
import styled from 'styled-components';

import { useSearchPhotos } from './hooks/useSearchPhotos';
import MasonryList from '../../../shared/list/MasonryList';

export default function Photos() {
  const { data, isLoading } = useSearchPhotos();
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container>
      <MasonryList data={data.results} />
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1000px;
  margin: 50px auto 0 auto;
`;
