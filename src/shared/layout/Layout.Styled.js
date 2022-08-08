import styled from 'styled-components';

export const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, ${({ alpha }) => alpha || 0.5});
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
