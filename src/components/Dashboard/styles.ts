import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100% - 80px);
  background-color: #F8F8F8;
`;

export const ContainerCenter = styled.div`
  width: 100%;
  max-width: 1000px;
`;

export const ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerMenus = styled.div`
  width: 100%;
  max-width: 317px;;
`;

export const ContainerData = styled.div`
  width: 100%;
`;

export const ContainerContent = styled.div`
  background-color: #FFFFFF;
  height: 100%;
  margin-left: 1rem;
  border-radius: 6px;
`;

export const Card = styled.div`
  background: linear-gradient(90deg, #07063B 0%, #121156 34.39%, #2C2B6E 88.85%);
  border-radius: 7px;
  width: 317px;
  height: 167px;
`;

export const StatusSubscription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  p {
    font-weight: 300;
    font-size: 14px;
  }

  span {
    color: #1DA816;
    margin-left: 5px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  padding: 1rem;
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;

  &.active {
    box-shadow: -4px 2px 12px -8px rgb(0 0 0 / 15%);
    background-color: #FFFFFF;
  }

  &:hover {
    box-shadow: -4px 2px 12px -8px rgb(0 0 0 / 15%);
    background-color: #FFFFFF;
  }

  & + & {
    margin-top: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-right: 16px;
      height: 26px;
      width: 26px;
    }

    p {
      font-weight: 300;
      font-size: 20px;
      color: #2F2F2F;
    }
  }
`;
