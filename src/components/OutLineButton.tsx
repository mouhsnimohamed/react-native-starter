import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type disabled = boolean | undefined;
interface OutLineButtonType {
  title: string;
  disabled?: disabled;
  onPress: (event: GestureResponderEvent) => void;
}

interface ButtonWrapType {
  disabled: disabled;
}
const OutLineButton = ({ disabled, title, onPress }: OutLineButtonType) => {
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

export default OutLineButton;

const ButtonWrap = styled.View<ButtonWrapType>`
  background-color: transparent;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 44px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  text-align: center;
  padding: 10px 30px;
  flex: 1;
`;
