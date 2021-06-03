import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import arrowLeft from '../../assets/arrow-left.svg';

import { Container } from './styles';

interface IPage {
  title: string;
  url: string;
}

interface IBreadcrumbs {
  pages: IPage[];
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ pages }) => {
  const history = useHistory();

  return (
    <Container>
      <span>Home</span>
      {
        pages.map((page, index) => (
          <Fragment key={index}>
            <img src={arrowLeft} alt="Seta para direita" />
            <span className={index === pages.length - 1 ? 'active' : ''} onClick={() => history.push(page.url)}>{page.title}</span>
          </Fragment>
        ))
      }
    </Container>
  )
}

export default Breadcrumbs;