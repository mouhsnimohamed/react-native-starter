import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import {
  PhoneInputText,
  PrimaryButton,
  Logo,
  LogoContainer,
  AppBaseView,
  SecondaryButton,
  onInputChangeType,
  StyledKeyboardAwareScrollView,
  ActionContainer,
  Spinner,
} from 'components';
// import { SignInAction } from 'modules/auth/auth.actions';
import { SignInPayloadTypes } from 'modules/auth/auth.types';
import { RootStackParamList } from 'navigations/RootNavigation';
import i18n from 'translations';
import { useTypedSelector } from 'redux/root.reducers';
import { AUTH_REDUCER } from 'modules/auth/auth.reducer';
import { Alert } from 'react-native';

type ActivateAccountScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ActivateAccount'
>;

type Props = {
  navigation: ActivateAccountScreenNavigationProp;
};

const ActivateAccount = ({ navigation }: Props) => {
  const [inputs, setInputs] = useState<SignInPayloadTypes>({
    email: '',
    password: '',
  });

  // const dispatch = useDispatch();
  const CheckAccount = () => {
    Alert.alert('Check account');
    // dispatch(SignInAction(inputs));
  };

  const handleChange: onInputChangeType = (name, value) => {
    setInputs({ ...inputs, [name]: value.trim() });
  };

  /* ### NAVIGATE Back ### */
  const goBack = () => {
    navigation.goBack();
  };

  const { isLoading } = useTypedSelector((state) => state[AUTH_REDUCER]);

  return (
    <StyledKeyboardAwareScrollView>
      <AppBaseView>
        <Spinner isLoading={isLoading} />
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <PhoneInputText
        // handleChange={handleChange}
        // name="phone"
        // placeholder={i18n.t('signin.phoneNumber.placeholder')}
        />

        <ActionContainer>
          <PrimaryButton title={i18n.t('common.next')} onPress={CheckAccount} />
          <SecondaryButton title={i18n.t('common.back')} onPress={goBack} />
        </ActionContainer>
      </AppBaseView>
    </StyledKeyboardAwareScrollView>
  );
};

export default ActivateAccount;
