import React, { useEffect } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../redux/root.reducers';
import { AUTH_REDUCER } from '../modules/auth/auth.reducer';
import AuthTabNavigator from '../screens/Authenticated/bottom-tab-navigator';
import NotAuthenticatedStackNavigator from '../screens/NotAuthenticated/stack-navigator';
import { CheckAuthAction } from '../modules/auth/auth.actions';
import SplashScreen from '../screens/SplashScreen';

export type RootStackParamList = {
  Home: undefined;
  Signin: undefined;
  Signup: undefined;
  PreActivateAccount: undefined;
  Warning: undefined;
  Settings: undefined;
  Beneficiaries: undefined;
  Transactions: { id: string | null };
};

/* create navigation => needed in redux action */
const navigationRef: React.RefObject<
  NavigationContainerRef
> | null = React.createRef();

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
    <NavigationContainer ref={navigationRef}>
      {isSignedIn ? (
        <AuthTabNavigator />
      ) : (
        <NotAuthenticatedStackNavigator isSigningOut={isSigningOut} />
      )}
    </NavigationContainer>
  );
};

/* use it in redux if needed */
export function navigate(name: string, params?: any) {
  navigationRef?.current?.navigate(name, params);
}

export default NavigatorView;
