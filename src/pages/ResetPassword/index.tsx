import React from 'react';

import iconTelemedicina from '../../assets/icon-telemedicina.svg';
import iconSeguro from '../../assets/icon-seguro.svg';
import iconAssistencia from '../../assets/icon-assistencia.svg';
import iconVoucher from '../../assets/icon-voucher.svg';

import Dashboard from '../../components/Dashboard';

import { Container, Cards, Card } from './styles';

const ResetPassword: React.FC = () => {
  return (
    <Dashboard>
      <Container>
        <h1>O que você deseja fazer?</h1>
        <Cards>
          <Card>
            <div>
              <img src={iconTelemedicina} alt="Telemedicina" />
              <p>Telemedicina</p>
            </div>
          </Card>
          <Card>
            <div>
              <img src={iconSeguro} alt="Telemedicina" />
              <p>Seguro de vida</p>
            </div>
          </Card>
          <Card>
            <div>
              <img src={iconAssistencia} alt="Telemedicina" />
              <p>Assistência</p>
            </div>
          </Card>
          <Card>
            <div>
              <img src={iconVoucher} alt="Telemedicina" />
              <p>Voucher</p>
            </div>
          </Card>
        </Cards>
      </Container>
    </Dashboard>
  )
}

export default ResetPassword;