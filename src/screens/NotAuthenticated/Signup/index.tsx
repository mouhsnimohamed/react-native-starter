import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  ActionContainer,
  AppSafeAreaView,
  Input,
  Logo,
  LogoContainer,
  onInputChangeType,
  PrimaryButton,
  SecondaryButton,
} from 'components';
import { RootStackParamList } from 'navigations/RootNavigation';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        <KeyboardAwareScrollView>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Input handleChange={handleChange} name="name" placeholder="Nom" />
          <Input
            handleChange={handleChange}
            name="prenom"
            placeholder="Prenom"
          />
          <Input
            handleChange={handleChange}
            name="address"
            placeholder="Adresse"
          />
          <Input handleChange={handleChange} name="phone" placeholder="Phone" />
          <Input
            handleChange={handleChange}
            name="phone2"
            placeholder="Phone"
          />

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
        </KeyboardAwareScrollView>
      </ScrollView>
    </AppSafeAreaView>
  );
};

export default Signup;
