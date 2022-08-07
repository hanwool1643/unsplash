import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Impression from '../../../shared/impression/Impression';
import RatioBox from '../../../shared/ratioBox/RatioBox';

export default function PhotoItem({ item }) {
  const [active, setActive] = useState(false);
  const handleImpression = async () => {
    // await delay(1000);
    console.log('@@ impression');
    setActive(true);
  };

  return (
    <Impression onImpression={handleImpression}>
      <Container className={classNames({ isActive: active })}>
        <RatioBox width={item.width} height={item.height}>
          {active ? <img src={item.urls.regular} alt="" /> : <Skeleton color={item.color} />}
        </RatioBox>
      </Container>
    </Impression>
  );
}

const Container = styled.div`
  background-color: #eee;
  transform: translateY(100px);
  transition: 0.2s;
  opacity: 0;
  &.isActive {
    transform: none;
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ color }) => color};
`;
