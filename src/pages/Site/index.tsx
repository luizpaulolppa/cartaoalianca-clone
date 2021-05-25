import React from 'react';

import logo from '../../assets/logo.svg';
import check from '../../assets/check.svg';
import family from '../../assets/family.svg';

import {
  GlobalContainer,
  ContainerSite,
  Header,
  TopFamily,
  BoxFamily,
  BoxBenefits,
  PartnersBox,
} from './styles';

const Site: React.FC = () => (
  <GlobalContainer>
    <ContainerSite>
      <Header>
        <div className="menus-header">
          <img src={logo} alt="Logo Cartão Aliança" />
          <ul>
            <li>Início</li>
            <li>Rede de Parceiros</li>
            <li>Fale Conosco</li>
            <li>Consultas Onlines</li>
            <li>Quero ser Parceiro</li>
          </ul>
        </div>
        <div className="logins-header">
          <a href="/">Entrar</a>
          <button>Quero Meu Cartão</button>
        </div>
      </Header>
      <TopFamily>
        <BoxFamily>
          <img src={family} alt="Família feliz" />
          <BoxBenefits>
            <h1>Cuide da sua família por <br/> menos de 1 real por dia!</h1>
            <ul>
              <li>
                <img src={check} alt="Check" />
                Sem carência
              </li>
              <li>
                <img src={check} alt="Check" />
                Laboratórios com até 50% de desconto
              </li>
              <li>
                <img src={check} alt="Check" />
                Medicamentos até 75% de Desconto
              </li>
              <li>
                <img src={check} alt="Check" />
                Médicos de R$ 50,00 a R$ 120,00 presencial ou online
              </li>
              <li>
                <img src={check} alt="Check" />
                Serviços de Automóvel, moto e residência
              </li>
              <li>
                <img src={check} alt="Check" />
                Assistência funerária, hospitalar e morte acidental
              </li>
            </ul>
            <div className="box-btn">
              <button>Quero Meu Cartão</button>
            </div>
          </BoxBenefits>
        </BoxFamily>
      </TopFamily>
      <PartnersBox>
        <h2>Rede de Parceiros</h2>
        <h3>Uma rede com mais de 5 mil parceiros para tudo o que você precisa</h3>
        <div>
          
        </div>
      </PartnersBox>
    </ContainerSite>
  </GlobalContainer>
)

export default Site;
