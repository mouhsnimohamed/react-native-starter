import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type disabled = boolean | undefined;
interface PrimaryButtonType {
  title: string;
  disabled?: disabled;
  onPress: (event: GestureResponderEvent) => void;
}

interface ButtonWrapType {
  disabled: disabled;
}
const PrimaryButton = ({ disabled, title, onPress }: PrimaryButtonType) => {
  const handleOnPress = (e: GestureResponderEvent) => {
    if (disabled) return;
    onPress(e);
  };
  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
      <ButtonWrap disabled={disabled}>
        <ButtonText>{title}</ButtonText>
      </ButtonWrap>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const ButtonWrap = styled.View<ButtonWrapType>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.light : theme.colors.primary};
  opacity: ${({ disabled }) => (disabled ? '0.8' : 1)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 44px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  text-align: center;
  padding: 10px 30px;
  flex: 1;
`;
