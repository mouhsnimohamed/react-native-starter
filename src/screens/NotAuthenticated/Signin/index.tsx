import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
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
import { RootStackParamList } from '../../../navigations/RootNavigation';

type SigninScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signin'
>;

type Props = {
  navigation: SigninScreenNavigationProp;
};

const Signin = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  const signInHandle = () => {
    dispatch(SignInAction('mail', '123456'));
  };

  const handleChange: onInputChangeType = (name, value) => {
    console.log(name, value);
  };

  return (
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
  );
};

export const ActionContainer = styled.View`
  margin-top: 40px;
  align-self: stretch;
`;

export default Signin;
