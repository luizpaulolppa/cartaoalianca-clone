import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 80px);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #9F9F9F;
    margin-bottom: 1.5rem;
  }

  input {
    margin-top: 1rem;
  }

  button {
    margin-top: 1rem;
  }
`;
