import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface PrimaryButtonType {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}
const PrimaryButton = ({ title, onPress }: PrimaryButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <ButtonWrap>
        <ButtonText>{title}</ButtonText>
      </ButtonWrap>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const ButtonWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 44px;
`;

const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large}px;
  text-align: center;
  padding: 10px 30px;
  flex: 1;
`;
