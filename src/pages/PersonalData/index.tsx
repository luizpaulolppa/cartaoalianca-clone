import React, { useState } from 'react';

import Dashboard from '../../components/Dashboard';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form } from './styles';

const PersonalData: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Dashboard>
      <Container>
        <Form>
          <h1>Editando dados pessoáis</h1>
          <Input placeholder="Nome" onChange={setName} value={name} />
          <Input placeholder="CPF" onChange={setCpf} value={cpf} />
          <Input placeholder="Telefone" onChange={setPhone} value={phone} />
          <Input placeholder="E-mail" onChange={setEmail} value={email} />
          <Button>Salvar</Button>
        </Form>
      </Container>
    </Dashboard>
  )
}

export default PersonalData;