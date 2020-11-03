import React from 'react';
import { Platform, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export type onInputChangeType = (name: string, value: string) => void;

interface Props extends TextInputProps {
  error?: string | undefined;
  name: string;
  label?: string;
  handleChange: onInputChangeType;
}

const Input = ({ handleChange, name, placeholder, error, ...rest }: Props) => {
  const handleInputChange = (value: string): void => {
    handleChange(name, value);
  };
  return (
    <TextInput
      autoCapitalize={'none'}
      placeholder={placeholder}
      onChangeText={handleInputChange}
      {...rest}
    />
  );
};

export default Input;

const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  height: 56px;
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  color: ${({ theme }) => theme.colors.lightText};
  text-align: left;
  border: 0 solid ${({ theme }) => theme.colors.light};
  border-bottom-width: ${Platform.OS === 'ios' ? '2px' : '1px'};
  border-bottom-color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  padding: 13px 10px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;
`;
