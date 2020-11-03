import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import styled from 'styled-components/native';
import {
  Input,
  PrimaryButton,
  Logo,
  LogoContainer,
  AppBaseView,
  SecondaryButton,
  onInputChangeType,
} from '../../../components';
import { SignInAction } from '../../../modules/auth/auth.actions';
import { SignInPayloadTypes } from '../../../modules/auth/auth.types';
import { RootStackParamList } from '../../../navigations/RootNavigation';

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

  return (
    <KeyboardAwareScrollView>
      <AppBaseView>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Input handleChange={handleChange} name="email" placeholder="Email" />

        <Input
          handleChange={handleChange}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />

        <ActionContainer>
          <PrimaryButton title="Se connecter" onPress={signInHandle} />
          <SecondaryButton
            title="Créer un compte"
            onPress={() => navigation.navigate('Signup')}
          />
        </ActionContainer>
      </AppBaseView>
    </KeyboardAwareScrollView>
  );
};

export const ActionContainer = styled.View`
  margin-top: 40px;
  align-self: stretch;
`;

export default Signin;
