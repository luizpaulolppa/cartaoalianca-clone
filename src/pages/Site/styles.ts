import styled from 'styled-components';

import backgroudSite from '../../assets/backgroud-site.svg';

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerSite = styled.div`
  width: 100%;
  max-width: 2000px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

  .menus-header {
    display: flex;
    align-items: center;
    width: 100%;

    li {
      display: inline;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #2F2F2F;
      cursor: pointer;
      margin-left: 1rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .logins-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    a {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      text-decoration-line: underline;
      color: #933C85;
      margin-right: 1rem;

      &:hover {
        opacity: 0.8;
      }
    }

    button {
      height: 48px;
      border-radius: 6px;
      background-color: #933C85;
      border: 0;
      width: 100%;
      max-width: 180px;
      color: #ffffff;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const TopFamily = styled.div`
  background-image: url(${backgroudSite});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  `;

export const BoxFamily = styled.div`
  display: flex;
  padding-top: 5rem;
`;

export const BoxBenefits = styled.div`
  margin-left: 2rem;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 42px;
    line-height: 60px;
    color: #FFFFFF;
    margin-bottom: 2rem;
  }

  ul {
    background: #F9F9F9;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    padding: 0.5rem 2rem 0.5rem 0rem;

    li {
      list-style-type: none;
      padding: 1rem;
      opacity: 0.7;
      
      img {
        margin-right: 1rem;
        margin-left: 0.5rem;
      }
    }
    
    li + li {
      border-top: 1px solid rgba(0, 0, 0, 0.15);
    }
  }

  .box-btn {
    display: flex;
    justify-content: center;
    
    button {
      margin-top: 1rem;
      height: 48px;
      border-radius: 6px;
      background-color: #933C85;
      border: 0;
      width: 100%;
      max-width: 180px;
      color: #ffffff;
  
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const PartnersBox = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;

  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: #933C85;
  }

  h3 {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 36px;
    color: #2F2F2F;
  }
`;