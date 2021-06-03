import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  img {
    width: 6px;
    margin: 6px;
  }

  span {
    font-weight: 300;
    font-size: 16px;
    color: #686868;
  }

  .active {
    color: #933C85;
    cursor: pointer;
  }
`;