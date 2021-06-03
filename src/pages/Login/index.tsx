import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form } from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  function handleLogin(event: any) {
    event.preventDefault();
    history.push('/app/home');
  }

  return (
    <>
      <Header loggedArea={false} />
      <Container>
        <Form onSubmit={handleLogin}>
          <h1>Entrar</h1>
          <p>Insira o seu email e senha para entrar na área Logada</p>
          <Input placeholder="Celular" onChange={setPhone} value={phone} />
          <Input placeholder="Codigo" onChange={setCode} value={code} />
          <Button>Entrar</Button>
        </Form>
      </Container>
    </>
  )
};

export default Login;