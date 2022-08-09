import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ContentContainer } from '../../../../shared/layout/Layout.Styled';
import { useSearchRelated } from './hooks/useSearchRelated';
import ScrollMenu from '../../../../shared/scrollMenu';
import RelatedItem from './components/RelatedItem';

export default function Related() {
  const { query } = useParams();
  const { data, isLoading } = useSearchRelated({ query });
  return (
    <Container>
      <ContentContainer>
        <h2>{query}</h2>
        <ScrollMenu data={data} renderItem={(item) => <RelatedItem item={item} />} />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 60px 12px 72px 12px;
  /* Hide scrollbar for Chrome, Safari and Opera */
  * ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  h2 {
    font-size: 46px;
    font-weight: bolder;
    text-transform: capitalize;
    margin: 0 0 16px;
  }
`;
