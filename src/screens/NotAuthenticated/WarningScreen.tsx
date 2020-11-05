import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import { AppBaseView, SecondaryButton } from '../../components';
import { RootStackParamList } from '../../navigations/RootNavigation';

const icon = require('../../assets/images/info.png');

type WarningScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Warning'
>;

type Props = {
  navigation: WarningScreenNavigationProp;
};

const WarningScreen = ({ navigation }: Props) => {
  return (
    <AppBaseView>
      <Icon source={icon} />
      <Title>
        Votre identifiants ou mot de passe sont incorrects. Pour plus
        d’informations, merci de prendre attache avec votre agence habituelle.
      </Title>
      <SecondaryButton title="Retour" onPress={() => navigation.goBack()} />
    </AppBaseView>
  );
};

export default WarningScreen;

const Icon = styled.Image`
  margin-bottom: 10px;
  width: 58px;
  height: 58px;
  margin-bottom: 35px;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 700;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.large}px;
  margin-bottom: 20px;
`;
