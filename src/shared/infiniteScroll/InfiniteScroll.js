import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function InfiniteScroll({
  children, onNext, length, isLoading, loader,
}) {
  const [inView, setInView] = useState();

  const sentinelRef = useRef();

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        // console.log('entry.isIntersecting', entry.isIntersecting);
        setInView(entry.isIntersecting);
      });
    };
    const observe = new IntersectionObserver(callback);
    if (sentinelRef.current) { // 1. Sentinel 렌더링 여부 체크
      observe.observe(sentinelRef.current);// 2. observe 해서 현재 화면안에 Sentinel 이 있는지 여부 체크
    } // 3. 화면에 있으면 entry.isIntersecting === true 없으면 false 콘솔에 띄움
  }, []);

  useEffect(() => {
    if (!inView || length === 0) return;
    onNext();
  }, [inView]);

  return (
    <Container>
      {children}
      <Sentinel ref={sentinelRef} className="sentinel" />
      {
                isLoading && loader
            }
    </Container>
  );
}

const Container = styled.div`

`;

const Sentinel = styled.div`
    height: 100px;
  background-color: #f18;
`;
