import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import checkActive from '../../assets/check-active.svg';
import iconHouse from '../../assets/icon-house.svg';
import arrowLeftPurple from '../../assets/arrow-left-purple.svg';
import iconPerson from '../../assets/icon-person.svg';
import iconPeople from '../../assets/icon-people.svg';
import iconLock from '../../assets/icon-lock.svg';

import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';

import {
  Container,
  ContainerCenter,
  ContainerBody,
  ContainerData,
  ContainerMenus,
  Card,
  StatusSubscription,
  ItemMenu,
  ContainerContent,
} from './styles';

const Dashboard: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  function checkIfActive(paths: string[]): boolean {
    const pathname = location.pathname.replace(/\//g, '');
    paths = paths.map((path) => path.replace(/\//g, ''));
    return paths.includes(pathname);
  }

  return (
    <>
      <Header loggedArea />
      <Container>
        <ContainerCenter>
          <Breadcrumbs pages={[]} />
          <ContainerBody>
            <ContainerMenus>
              <Card></Card>
              <StatusSubscription>
                <p>Assinatura</p>
                <div>
                  <img src={checkActive} alt="Assinatura ativa" />
                  <span>Ativo</span>
                </div>
              </StatusSubscription>
              <ItemMenu
                className={checkIfActive(['/app/home']) ? 'active' : ''}
                onClick={() => history.push('/app/home')}>
                <div>
                  <img src={iconHouse} alt="Home" />
                  <p>Inicial</p>
                </div>
                <img src={arrowLeftPurple} alt="Seta para direita" />
              </ItemMenu>
              <ItemMenu
                className={checkIfActive(['/app/dados-pessoais']) ? 'active' : ''}
                onClick={() => history.push('/app/dados-pessoais')}>
                <div>
                  <img src={iconPerson} alt="Home" />
                  <p>Dados Pessoais</p>
                </div>
                <img src={arrowLeftPurple} alt="Seta para direita" />
              </ItemMenu>
              <ItemMenu
                className={checkIfActive(['/app/dependentes']) ? 'active' : ''}
                onClick={() => history.push('/app/dependentes')}>
                <div>
                  <img src={iconPeople} alt="Home" />
                  <p>Dependentes</p>
                </div>
                <img src={arrowLeftPurple} alt="Seta para direita" />
              </ItemMenu>
              <ItemMenu
                className={checkIfActive(['/app/alterar-senha']) ? 'active' : ''}
                onClick={() => history.push('/app/alterar-senha')}>
                <div>
                  <img src={iconLock} alt="Home" />
                  <p>Alterar Senha</p>
                </div>
                <img src={arrowLeftPurple} alt="Seta para direita" />
              </ItemMenu>
            </ContainerMenus>
            <ContainerData>
              <ContainerContent>
                {children}
              </ContainerContent>
            </ContainerData>
          </ContainerBody>
        </ContainerCenter>
      </Container>
    </>
  );
}

export default Dashboard;