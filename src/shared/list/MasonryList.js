import React from 'react';
import styled from 'styled-components';
import PhotoItem from '../../pages/home/components/PhotoItem';

export default function MasonryList({ data, columnCount = 3 }) {
  const photoGroups = [];
  const photoHeight = [];

  for (let i = 0; i < columnCount; i++) {
    photoGroups.push([]);
    photoHeight.push(0);
  }
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const minHeight = Math.min(...photoHeight);
    const minHeightIndex = photoHeight.indexOf(minHeight);
    photoGroups[minHeightIndex].push(item);
    photoHeight[minHeightIndex] += (item.height / item.width);
    // if(i % 3 === 0){
    //     photoGroups[0].push(data[i])
    // }
    // if(i % 3 === 1){
    //     photoGroups[1].push(data[i])
    // }
    // if(i % 3 === 2){
    //     photoGroups[2].push(data[i])
    // }
  }

  return (
    <Container>
      <Row>
        {
                photoGroups.map((group, index) => (
                  <Col key={index} columnCount={columnCount}>
                    {
                                group.map((item) => (
                                  <PhotoWrapper key={item?.id}>
                                    <PhotoItem item={item} />
                                  </PhotoWrapper>
                                ))
                            }
                  </Col>
                ))
            }
      </Row>
    </Container>
  );
}
const Container = styled.div`
    
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;//padding 10 준것과 무슨 상광일까? 
`;
const Col = styled.div`
  width: ${({ columnCount }) => (100 / columnCount)}%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const PhotoWrapper = styled.div`
    margin-bottom: 20px;
`;
