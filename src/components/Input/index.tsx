import React from 'react';

import { InputContainer } from './styles';

interface IInput {
  value: string;
  placeholder: string;
  onChange: Function;
  type?: string;
}

const Input: React.FC<IInput> = ({ placeholder, onChange, value, type }) =>
  <InputContainer
    type={type || 'text'}
    placeholder={placeholder}
    onChange={() => onChange()}
    value={value} />;

export default Input;