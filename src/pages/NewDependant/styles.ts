import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 2rem;
  }

  input {
    margin-top: 1rem;
  }

  button {
    margin-top: 1rem;
  }
`;

export const Form = styled.form`
  max-width: 400px;
`;
