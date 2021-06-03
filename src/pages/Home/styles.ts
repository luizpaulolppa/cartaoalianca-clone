import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;

  h1 {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const Cards = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 108px;
  margin: 0.5rem;
  border-radius: 6px;
  border: 1px solid #F6F6F6;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #F8F8F8;
  }

  p {
    margin-top: 0.5rem;
  }
`;