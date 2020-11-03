import React from 'react';
import { AppBaseView, PrimaryText } from '../../../components';
import { theme } from '../../../components/styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/RootNavigation';
import LogOut from '../../../components/LogOut';

export interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <AppBaseView>
      <PrimaryText isPrimary bold size={theme.fontSize.large}>
        Welcome, you're in Home Screen
      </PrimaryText>
      <PrimaryText isSecondary bold>
        Use navigation bellow or press on logout button
      </PrimaryText>
      <LogOut />
    </AppBaseView>
  );
};

export default Home;
