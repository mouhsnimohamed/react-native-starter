import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../navigations/RootNavigation';
import HomeStack from './Home/stack-navigator';
import Profile from './Profile';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
