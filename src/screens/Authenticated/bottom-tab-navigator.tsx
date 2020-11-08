import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from 'navigations/RootNavigation';
import tabNavigationData from './buttom-tab-data';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
    }}>
    {tabNavigationData.map((item, idx) => (
      <Tab.Screen
        key={`tab_item${idx + 1}`}
        name={item.name}
        component={item.component}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarView>
              <TabBarIcon
                resizeMode="contain"
                source={item.icon}
                focused={focused}
              />
            </TabBarView>
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

const TabBarView = styled.View`
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  bottom: ${Platform.OS === 'ios' ? 0 : 0};
`;

interface TabBarIconTypes {
  focused: boolean;
}

const TabBarIcon = styled.Image<TabBarIconTypes>`
  width: 23px;
  height: 23px;
  ${({ focused, theme }) =>
    focused ? `tint-color: ${theme.colors.secondary};` : ''}
`;
