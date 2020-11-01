import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  AppSafeAreaView,
  Logo,
  LogoContainer,
  PrimaryButton,
  SecondaryButton,
  Input,
  onInputChangeType,
} from '../../../components';
import { ActionContainer } from '../Signin';
import { RootStackParamList } from '../../../navigations/RootNavigation';
import { ScrollView } from 'react-native';

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const Signup = ({ navigation }: Props) => {
  const handleChange: onInputChangeType = (name, value) => {
    console.log(name, value);
  };

  return (
    <AppSafeAreaView>
      <ScrollView style={{ flex: 1 }}>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Input handleChange={handleChange} name="name" placeholder="Nom" />
        <Input handleChange={handleChange} name="prenom" placeholder="Prenom" />
        <Input
          handleChange={handleChange}
          name="address"
          placeholder="Adresse"
        />
        <Input handleChange={handleChange} name="phone" placeholder="Phone" />
        <Input handleChange={handleChange} name="phone2" placeholder="Phone" />

        <ActionContainer>
          <PrimaryButton
            title="Continuer"
            onPress={() => {
              alert('test');
            }}
          />
          <SecondaryButton
            title="Annuler"
            onPress={() => navigation.goBack()}
          />
        </ActionContainer>
      </ScrollView>
    </AppSafeAreaView>
  );
};

export default Signup;
