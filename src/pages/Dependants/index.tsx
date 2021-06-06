import React from 'react';
import { useHistory } from 'react-router-dom';

import pencil from '../../assets/pencil.svg';

import Dashboard from '../../components/Dashboard';

import { Container, ListDependants, Dependant, Title } from './styles';

const Dependants: React.FC = () => {
  const history = useHistory();

  return (
    <Dashboard>
      <Container>
        <Title>
          <h1>Dependentes</h1>
          <p onClick={() => history.push('/app/dependentes/novo')}>Cadastrar dependente</p>
        </Title>
        <ListDependants>
          {
            [1, 2, 3, 4].map(() => (
              <Dependant>
                <div className="content-photo">
                  <div className="photo">LP</div>
                </div>
                <div className="content-data">
                  <p className="label">Nome</p>
                  <p className="value">Luiz Paulo Pilegi de Almeida</p>
                  <p className="label">CPF</p>
                  <p className="value">091.222.099-64</p>
                  <p className="label">Celular</p>
                  <p className="value">(41) 999381724</p>
                  <p className="label">E-mail</p>
                  <p className="value">luizpilegilppa@gmail.com</p>
                </div>
                <div className="content-action">
                  <img src={pencil} alt="Editar dependente" />
                </div>
              </Dependant>
            ))
          }
        </ListDependants>
      </Container>
    </Dashboard>
  )
}

export default Dependants;