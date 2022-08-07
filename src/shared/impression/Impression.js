import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export default function Impression({ children, onImpression }) {
  const [inView, setInView] = useState();
  const ref = useRef();

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        setInView(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px 1000px 0px',
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  useEffect(() => {
    if (!inView) return;
    onImpression();
  }, [inView]);

  return (
    <Container ref={ref}>
      {children}
    </Container>
  );
}

const Container = styled.div`

`;
