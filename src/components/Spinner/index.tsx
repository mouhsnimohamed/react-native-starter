import { theme } from 'components/styles/theme';
import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, Modal } from 'react-native';
import styled from 'styled-components/native';

interface SpinnerPropsType {
  isLoading: boolean;
}
const Spinner: React.FC<ActivityIndicatorProps & SpinnerPropsType> = ({
  size = 'large',
  color = theme.colors.primary,
  isLoading,
}) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isLoading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <Container>
        <ActivityIndicator color={color} size={size} />
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalBackground};
`;

export default Spinner;
