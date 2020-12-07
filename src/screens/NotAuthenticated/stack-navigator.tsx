import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './Signin';
import Signup from './Signup';
import WarningScreen from './WarningScreen';

import { RootStackParamList } from 'navigations/RootNavigation';

const Stack = createStackNavigator<RootStackParamList>();

interface NotAuthenticatedStackNavigatorProps {
  isSigningOut: boolean;
}

const NotAuthenticatedStackNavigator: React.FC<NotAuthenticatedStackNavigatorProps> = ({
  isSigningOut,
}) => {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          animationTypeForReplace: isSigningOut ? 'pop' : 'push',
        }}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Warning" component={WarningScreen} />
    </Stack.Navigator>
  );
};

export default NotAuthenticatedStackNavigator;
