import React from 'react';
import styled from 'styled-components';
import PhotoItem from '../../pages/home/components/PhotoItem';

export default function GridList({ data }) {
  return (
    <Row>

      {
                    data.map((item) => <Col><PhotoItem key={item.id} item={item} /></Col>)
                }
    </Row>
  );
}

const Row = styled.div`
    display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;//padding 10 준것과 무슨 상광일까? 
`;
const Col = styled.div`
    width: 33.33%;
  padding: 0 10px;
  margin-bottom: 20px;
`;
