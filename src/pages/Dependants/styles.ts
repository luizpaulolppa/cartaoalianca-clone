import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;

  h1 {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const ListDependants = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const Dependant = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 285px;
  margin: 0.5rem;
  padding: 1rem;

  .content-photo {
    .photo {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 48px;
      width: 48px;
      border: 1px solid #933C85;
    }
  }

  .content-data {
    .label {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #999999;
    }
    .value {
      font-weight: 300;
      font-size: 12px;
      line-height: 18px;
      color: #2F2F2F;
    }
  }

  .content-action {
    img {
      cursor: pointer;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
    color: #933C85;
    cursor: pointer;
  }
`;
