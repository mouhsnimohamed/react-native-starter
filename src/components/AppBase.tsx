import { Platform } from 'react-native';
import styled from 'styled-components/native';

const AppBaseView = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${Platform.OS === 'ios' ? 'padding-top: 0px;' : ''}
`;

const AppSafeAreaView = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 20px;
`;

export { AppSafeAreaView, AppBaseView };
