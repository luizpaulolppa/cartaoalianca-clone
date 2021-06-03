import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

interface IHeader {
  loggedArea: boolean;
}

const Header: React.FC<IHeader> = ({ loggedArea }) => {
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push('/app/login');
  }

  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Cartão Aliança" />
        {
          loggedArea ? <span title="Sair" onClick={logout}>Sair</span> : <span />
        }
      </div>
    </Container>
  )
}

export default Header;