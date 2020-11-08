import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Input,
  PrimaryButton,
  Logo,
  LogoContainer,
  AppBaseView,
  SecondaryButton,
  onInputChangeType,
  StyledKeyboardAwareScrollView,
  ActionContainer,
} from 'components';
import { SignInAction } from 'modules/auth/auth.actions';
import { SignInPayloadTypes } from 'modules/auth/auth.types';
import { RootStackParamList } from 'navigations/RootNavigation';
import i18n from 'translations';

type SigninScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signin'
>;

type Props = {
  navigation: SigninScreenNavigationProp;
};

const Signin = ({ navigation }: Props) => {
  const [inputs, setInputs] = useState<SignInPayloadTypes>({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const signInHandle = () => {
    dispatch(SignInAction(inputs));
  };

  const handleChange: onInputChangeType = (name, value) => {
    setInputs({ ...inputs, [name]: value.trim() });
  };

  /* ### NAVIGATE TO PreActivateAccount ### */
  const navigateToPreActivateAccount = () => {
    navigation.navigate('PreActivateAccount');
  };

  return (
    <StyledKeyboardAwareScrollView>
      <AppBaseView>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Input
          handleChange={handleChange}
          name="email"
          placeholder={i18n.t('signin.email.placeholder')}
        />

        <Input
          handleChange={handleChange}
          name="password"
          placeholder={i18n.t('signin.password.placeholder')}
          secureTextEntry={true}
        />

        <ActionContainer>
          <PrimaryButton
            title={i18n.t('signin.connect')}
            onPress={signInHandle}
          />
          <SecondaryButton
            title={i18n.t('signin.register')}
            onPress={navigateToPreActivateAccount}
          />
        </ActionContainer>
      </AppBaseView>
    </StyledKeyboardAwareScrollView>
  );
};

export default Signin;
