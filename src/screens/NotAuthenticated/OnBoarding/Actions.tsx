import { View } from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  navigateToSignIn: () => void
  navigateToSignUp: () => void
}
const Actions = ({ navigateToSignIn, navigateToSignUp }: Props) => {
  return (
    <BaseView>
      <View style={{ flex: 1, marginRight: 5 }}>
        <PrimaryButton
          title="Se connecter"
          onPress={navigateToSignIn}
          variant="outlined"
        />
      </View>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <PrimaryButton
          title="S'inscrire"
          onPress={navigateToSignUp}
          variant="filled"
        />
      </View>
    </BaseView>
  );
};

const BaseView = styled.View`
  height: 80px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-horizontal: 27px;
`;

export default Actions;
