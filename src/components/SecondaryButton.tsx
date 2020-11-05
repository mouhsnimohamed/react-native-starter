import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

interface SecondaryButtonType {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const SecondaryButton = ({ title, onPress }: SecondaryButtonType) => {
  return <ButtonText onPress={onPress}>{title}</ButtonText>;
};

export default SecondaryButton;

const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  text-align: center;
  text-decoration: underline;
  padding: 15px 0;
  margin-bottom: 10px;
`;
