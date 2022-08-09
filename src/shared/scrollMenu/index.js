import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { map } from 'lodash-es';
import { IconChevronLeft, IconChevronRight } from '../../incons';

export default function ScrollMenu({ data, renderItem }) {
  const menusRef = useRef();
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  const scrollStatus = {
    start: scrollLeft === 0,
    end: scrollLeft >= maxScroll,
  };

  const handleScrollRight = () => {
    menusRef.current.scrollLeft += 300;
  };

  const handleScrollLeft = () => {
    menusRef.current.scrollLeft -= 300;
  };

  const handleScroll = (e) => {
    setScrollLeft(e.target.scrollLeft);
    setMaxScroll(e.target.scrollWidth - e.target.clientWidth - 1);
    console.log('@@ scrollLeft: ', scrollLeft);
    console.log('@@ maxScroll: ', maxScroll);
  };

  // const renderItem = (item) => <RelatedItem item={item} />;

  return (
    <Container>
      {
                !scrollStatus.start && (
                <div>
                  <Fog className="left">
                    <Button className="left" onClick={handleScrollLeft}>
                      <IconChevronLeft />
                    </Button>
                  </Fog>
                </div>
                )
            }
      <Menu className="menu" ref={menusRef} onScroll={handleScroll}>
        {
                    map(data, (item) => renderItem(item))
                }
      </Menu>
      {
                !scrollStatus.end && (
                <div>
                  <Fog className="right">
                    <Button className="right" onClick={handleScrollRight}>
                      <IconChevronRight />
                    </Button>
                  </Fog>
                </div>
                )
            }
    </Container>
  );
}

const Container = styled.div`
  position: relative;

`;

const Menu = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
`;

const Button = styled.button`
  position: absolute;
  background: transparent;
  display: flex;
  align-items: center;
  top: 0; //top:0, bottom: 0은 세로로 부모요소에 꽉차게 하는 것임
  bottom: 0;
  border: 1px solid transparent;
  cursor: pointer;

  &.left {
    left: 0px;
  }
;

  &.right {
    right: 0;
  }
`;

const Fog = styled.div`
  position:absolute;
  width: 200px;
  top: 0;
  bottom: 0;
  pointer-events: none;
  &.left {
    left: 0px;
    background: linear-gradient(270deg,#fff0 0,#fff 90%,#fff)
  };
  &.right {
    right: 0px;
    background: linear-gradient(90deg,#fff0 0,#fff 90%,#fff)
  }
  ;

`;
