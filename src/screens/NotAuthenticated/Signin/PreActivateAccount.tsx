import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert } from 'react-native';

import {
  OutLineButton,
  PrimaryButton,
  Logo,
  LogoContainer,
  AppBaseView,
  ActionContainer,
} from '../../../components';
import { RootStackParamList } from '../../../navigations/RootNavigation';
import i18n from '../../../translations';

type SigninScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PreActivateAccount'
>;

type Props = {
  navigation: SigninScreenNavigationProp;
};

const PreActivateAccount = ({ navigation }: Props) => {
  const navigateToActivateAccount = () => {
    Alert.alert('activate');
  };

  const navigateToCreateAccount = () => {
    Alert.alert('create');
  };

  return (
    <AppBaseView>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <ActionContainer>
        <PrimaryButton
          title={i18n.t('signin.createAccount')}
          onPress={navigateToActivateAccount}
        />
        <OutLineButton
          title={i18n.t('signin.activateAccount')}
          onPress={navigateToActivateAccount}
        />
      </ActionContainer>
    </AppBaseView>
  );
};

export default PreActivateAccount;
