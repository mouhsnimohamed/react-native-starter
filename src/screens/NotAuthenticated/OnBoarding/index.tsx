import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/RootNavigation';
import Actions from './Actions';
import Slider from './Slider';

type OnBoardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnBoarding'
>;

type Props = {
  navigation: OnBoardingScreenNavigationProp;
};
const OnBoarding = ({ navigation }: Props) => {
  const navigateToSignIn = () => {
    navigation.navigate('Signin');
  };
  const navigateToSignUp = () => {
    navigation.navigate('Signup');
  };
  return (
    <>
      <Slider />
      <Actions
        navigateToSignIn={navigateToSignIn}
        navigateToSignUp={navigateToSignUp}
      />
    </>
  );
};

export default OnBoarding;
