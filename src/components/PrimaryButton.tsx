import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type disabled = boolean | undefined;
type variant = 'outlined' | 'filled' | 'default';

interface PrimaryButtonType {
  title: string;
  disabled?: disabled;
  onPress: (event: GestureResponderEvent) => void;
  variant?: variant;
}

interface ButtonWrapType {
  disabled: disabled;
  variant: variant;
}

interface ButtonTextType {
  variant: variant;
}
const PrimaryButton = ({
  disabled,
  title,
  onPress,
  variant = 'default',
}: PrimaryButtonType) => {
  const handleOnPress = (e: GestureResponderEvent) => {
    if (disabled) {
      return;
    }
    onPress(e);
  };
  return (
    <TouchableOpacity onPress={handleOnPress} activeOpacity={0.7}>
      <ButtonWrap disabled={disabled} variant={variant}>
        <ButtonText variant={variant}>{title}</ButtonText>
      </ButtonWrap>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const ButtonWrap = styled.View<ButtonWrapType>`
  background-color: ${({ theme, disabled, variant }) => {
    if (disabled) {
      return theme.colors.light;
    } else if (variant === 'filled') {
      return 'white';
    } else {
      return theme.colors.primary;
    }
  }};
  opacity: ${({ disabled }) => (disabled ? '0.8' : 1)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 44px;
  margin-bottom: 10px;
  border: ${({ variant }) =>
    variant === 'outlined' ? '1px solid white' : 'none'};
  border-radius: 5px;
`;

const ButtonText = styled.Text<ButtonTextType>`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme, variant }) => variant === 'filled' ? theme.colors.primary : theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium}px;
  text-align: center;
  padding: 10px 30px;
  flex: 1;
  font-weight: 600;
`;
