import React, { useState } from 'react';
import styled from 'styled-components';
import { usePhotos } from '../hooks/usePhotos';
import MasonryList from '../../../shared/list/MasonryList';
import InfiniteScroll from '../../../shared/infiniteScroll/InfiniteScroll';
import { ContentContainer } from '../../../shared/layout/Layout.Styled';

// let value = 10

export default function PhotoList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePhotos({
    page,
    perPage: 20,
  });

  // if(!isSuccess && isLoading) return <p>loading...</p>

  const handleNext = () => {
    setPage(page + 1);// 모든 콜백함수는 함수 모양을 그대로 저장하는가?(useEffect 제외)
    // console.log(page)
  };

  return (
    <Container>
      <ContentContainer>
        <InfiniteScroll
          onNext={handleNext}
          length={data.length}
          isLoading={isLoading}
          loader={<p>Loading</p>}
        >
          <MasonryList columnCount={3} data={data} />
        </InfiniteScroll>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  
`;
