import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../redux/root.reducers';
import { AUTH_REDUCER } from '../modules/auth/auth.reducer';
import AuthTabNavigator from '../screens/Authenticated/bottom-tab-navigator';
import NotAuthenticatedStackNavigator from '../screens/NotAuthenticated/stack-navigator';
import { CheckAuthAction } from '../modules/auth/auth.actions';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string | null };
  Profile: undefined;
  Signin: undefined;
  Signup: undefined;
};

const NavigatorView: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignedIn, isSigningOut, isLoading } = useTypedSelector(
    (state) => state[AUTH_REDUCER],
  );

  useEffect(() => {
    dispatch(CheckAuthAction());
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <AuthTabNavigator />
      ) : (
        <NotAuthenticatedStackNavigator isSigningOut={isSigningOut} />
      )}
    </NavigationContainer>
  );
};

export default NavigatorView;
