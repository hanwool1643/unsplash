import React from 'react';
import styled from 'styled-components';

import { useSearchPhotos } from './hooks/useSearchPhotos';
import MasonryList from '../../../shared/list/MasonryList';
import { ContentContainer } from '../../../shared/layout/Layout.Styled';

export default function Photos() {
  const { data, isLoading } = useSearchPhotos();
  if (isLoading) return <p>Loading...</p>;
  return (
    <Container>
      <ContentContainer>
        <MasonryList data={data.results} />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  
`;
