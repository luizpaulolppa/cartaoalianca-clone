import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  padding: 1rem;
  border-bottom: solid 0.5px #F1F1F1;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    
    img {
      cursor: pointer;
    }

    span {
      color: #933C85;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;