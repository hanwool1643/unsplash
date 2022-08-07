import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { IconSearch } from '../../incons';
import { DefaultButton } from '../button/Button.Styled';

// eslint-disable-next-line react/prop-types
export default function SearchBox({ shape }) {
  console.log(shape);
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/photos/${value}`);
  };

  return (
    <Container className={cn('SearchBox', shape)}>
      <Form onSubmit={handleSubmit}>
        <ButtonSearch>
          <IconSearch />
        </ButtonSearch>
        <Input type="text" onChange={handleChange} />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  flex: 1;//width: 100%; 써도 됨
  
  
`;

const ButtonSearch = styled(DefaultButton)`
    
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;

  .round & {//부모 클래스 가져오는 법 외우기
    border-radius: 100px;
    height: 40px;
    background: #eee;
  }
  .square & {
    border-radius: 6px;
    height: 56px;
    background: #fff;
  }
  svg { 
    width: 20px;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: 0;
`;
