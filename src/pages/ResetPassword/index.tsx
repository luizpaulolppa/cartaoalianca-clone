import React, { useState } from 'react';

import Dashboard from '../../components/Dashboard';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Form } from './styles';

const ResetPassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPasswors, setRepeatPasswors] = useState('');

  return (
    <Dashboard>
      <Container>
        <Form>
          <h1>Alterar senha</h1>
          <Input 
            placeholder="Senha antiga" 
            onChange={setOldPassword} 
            value={oldPassword}
            type="password" />
          <Input 
            placeholder="Nova senha" 
            onChange={setNewPassword} 
            value={newPassword}
            type="password" />
          <Input 
            placeholder="Repetir senha" 
            onChange={setRepeatPasswors} 
            value={repeatPasswors}
            type="password" />
          <Button>Alterar</Button>
        </Form>
      </Container>
    </Dashboard>
  )
}

export default ResetPassword;