import { Platform, StyleSheet } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AppBaseView = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${Platform.OS === 'ios' ? 'padding-top: 0px;' : ''}
`;

const AppSafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 25px;
`;

const ActionContainer = styled.View`
  margin-top: 30px;
  align-self: stretch;
`;

const StyledKeyboardAwareScrollView = ({ children }: any) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      {children}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export {
  AppSafeAreaView,
  AppBaseView,
  StyledKeyboardAwareScrollView,
  ActionContainer,
};
