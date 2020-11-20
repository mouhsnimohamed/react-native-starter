import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import {
  ActionContainer,
  AppBaseView,
  Logo,
  LogoContainer,
  OutLineButton,
  PrimaryButton,
} from 'components';
import { RootStackParamList } from 'navigations/RootNavigation';
import i18n from 'translations';

type SigninScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PreActivateAccount'
>;

type Props = {
  navigation: SigninScreenNavigationProp;
};

const PreActivateAccount = ({ navigation }: Props) => {
  const navigateToActivateAccount = () => {
    navigation.navigate('ActivateAccount');
  };

  const navigateToCreateAccount = () => {
    navigation.navigate('Signup');
  };

  return (
    <AppBaseView>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <ActionContainer>
        <PrimaryButton
          title={i18n.t('signin.createAccount')}
          onPress={navigateToCreateAccount}
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
