import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { map } from 'lodash-es';
import classNames from 'classnames';
import {
  ColorFilter, IconCollection, IconImage, IconUser,
} from '../../../../incons';

export default function SearchLnb() {
  const { query } = useParams();
  const { pathname } = useLocation();

  const menus = [
    {
      to: `/search/photos/${query}`,
      icon: <IconImage />,
      title: 'Photos',
      count: '10K',
      isActive: pathname.startsWith('/search/photos'),
    },
    {
      to: `/search/collections/${query}`,
      icon: <IconCollection />,
      title: 'collections',
      count: '3.9K',
      isActive: pathname.startsWith('/search/collections'),
    },
    {
      to: `/search/users/${query}`,
      icon: <IconUser />,
      title: 'user',
      count: '10K',
      isActive: pathname.startsWith('/search/users'),
    },
  ];
  return (
    <Container>
      <Nav>
        {
                    map(menus, ({
                      to, icon, title, count, isActive,
                    }) => (
                      <Link
                        to={to}
                        className={classNames({ isActive })}
                      >
                        {icon}
                        <div className="title">{title}</div>
                        <div className="count">{count}</div>
                      </Link>
                    ))
                }
      </Nav>
      <FilterBox>
        <ColorFilter />
      </FilterBox>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  
`;

const Nav = styled.div`
  display: flex;
  a {
    font-size: 14px;
    color: #767676;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    height: 56px;
    margin: 0 20px;
    border: 2px solid transparent;
    &:first-child{
      margin-left: 0;
    }
    &.isActive{
      border-bottom: 2px solid #333;
    }
    svg {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    .title {
      margin-right: 10px;
    }
  }
`;
const FilterBox = styled.div`
  height: 48px;
  width:100%;
  display: flex;
  align-items: center;
  
  svg {
    color: #767676;
    width: 18px;
    height: 18px;
    margin-left: auto;

  }
`;
